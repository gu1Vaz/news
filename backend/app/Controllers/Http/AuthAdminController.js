'use strict'

const Admin = use("App/Models/Admin");

class AuthAdminController {

  async autenticar({ request, auth }) {
    const { email, password } = request.all();
    const retorno = {};
    let token;
    if (token = await auth.authenticator('admin').attempt(email, password)) {
      const user = await Admin.findBy('email', email)
      retorno.token = token.token
      retorno.user = user.username;
      retorno.id = user.id;
      retorno.image_url = user.image_url;
    } else {
      retorno.data = "E-mail ou senha Incorretos";
    }
    return retorno;
  }

}

module.exports = AuthAdminController
