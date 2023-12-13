'use strict'

const User = use("App/Models/User");

class AuthController {
    
    async registrar({ request, auth }) {
        const data = request.only(["username", "email", "password"]);

        await User.create(data);

        return this.autenticar({request, auth});
    }

    async autenticar({ request, auth }) {
        const { email, password } = request.all();
        const retorno = {};
        let token;
        if (token = await auth.attempt(email, password)) {
            const user = await User.findBy('email', email)
            retorno.token = token.token
            retorno.user = user.username;
            retorno.id = user.id;
            retorno.image_url = user.image_url;
        } else {
            retorno.data = "E-mail ou senha Incoretos";
        }
        return retorno;
    }
    async switch_password({ user, new_password }) {
        user.password = new_password;
        await user.save();
    }
}

module.exports = AuthController


