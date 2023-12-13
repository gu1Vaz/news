'use strict'

const Materia = use("App/Models/Materia");
const Admin = use("App/Models/Admin");
const Helpers = use('Helpers');
const MoveFiles = use('App/Models/Traits/MoveFiles');

class MateriaController {
  constructor() {
    this.moveFiles = new MoveFiles();
  }

  async index ({  }) {
    const news = await Materia.query()
    .select('route_id','image_url','title', 'subtitle','creador',"created_at")
    .orderBy('created_at','desc')
    .limit(15).fetch()
    return news;
  }
  async getCreadores ({  }) {
    const criadores = await Admin.query()
    .select('username')
    .orderBy('created_at','desc')
    .fetch()
    return criadores;
  }

  
  async create ({ request, response, view }) {
  }

  
  async store ({ auth, request }) {
    const user = await auth.getUser()
    const data = request.only(["title","subtitle","route_id","intro","dev","coc"]);
    data.creador = user.username;
    data.vet_links = request.input("vetLinks");
    
    const pathFull = Helpers.publicPath('uploads/'+data.route_id);
    const path = 'uploads/'+data.route_id+"/";

    data.image_url = await this.moveFiles.one(request.file("image"),pathFull,path);
    data.vet_images = await this.moveFiles.all(request.file("vetImages"),pathFull,path);
    data.vet_files = await this.moveFiles.all(request.file("vetFiles"),pathFull,path);
    

    const materia = await Materia.create(data);
    return materia;

  }

  
  async show ({ params, request, response, view }) {
    var materia = await Materia.query().where('route_id', params.id).first()
    return materia;
  }

  
  async edit ({ params, request, response, view }) {
  }

  
  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = MateriaController
