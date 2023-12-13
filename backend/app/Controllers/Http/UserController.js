'use strict'

const AuthController = use('App/Controllers/Http/AuthController');
const MoveFiles = use('App/Models/Traits/MoveFiles');

const Helpers = use('Helpers');
const Hash = use('Hash');

class UserController {
  constructor() {
    this.moveFiles = new MoveFiles();
  }
  async update_ft({auth, request}){
    let user = await auth.getUser()
    
    const pathFull = Helpers.publicPath('uploads/users/'+auth.user.username);
    const path = 'uploads/users/'+auth.user.username+"/";

    user.image_url = await this.moveFiles.one(request.file("image"),pathFull,path);
    await user.save()

    return {"image_url":user.image_url};
  }
  async index({ auth }) {
    const user = await auth.getUser();
    const response = {
      id: user.id,
      username: user.username,
      email: user.email,
      created_at: user.created_at,
    };
    return response;
  }
  
  async create ({ request, response, view }) {
  }
  async store ({ request, response }) {
  }
  async show ({ params, request, response, view }) {
  }
  async update ({auth, request}) {
    const user  = await auth.getUser()
    const data = request.only(["username", "email"]);

    if(data.username) user.username = data.username
    if(data.email) user.email = data.email

    user.save()
    return {status:"success"}
  }
  async edit({ auth, request }) {
    const user  = await auth.getUser()
    const authController = new AuthController();

    const { current_password, new_password } = request.only(['current_password', 'new_password']);
    const isPasswordValid = await Hash.verify(current_password, user.password);

    if(isPasswordValid){
      authController.switch_password({user, new_password})
      return {status:"success"}
    }
    return {status:"error"}
  }

  async destroy({auth}) {
    const user  = await auth.getUser()
    if(await user.delete()) return {status:"success"}
    return {status:"error"}
  }
}
module.exports = UserController
