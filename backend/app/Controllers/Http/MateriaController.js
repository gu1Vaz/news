'use strict'

const Materia = use("App/Models/Materia");
const Helpers = use('Helpers');

class MateriaController {

  async moveImage(image,path,path2){
    let imageLink = "https://hackin.online/"+path2+image.stream.filename;
    
    await image.move(path,{
        overwrite: true
    });
    
    if (!image.moved()) {
      return image.error()
    }
    return imageLink;
  }
  
  async moveImagesVet(vetImages,path,path2){
    let vetImagesLinks = ""
    if(!vetImages) return null;

    else if(!vetImages.files){
      await vetImages.move(path,{
          overwrite: true
      });
      vetImagesLinks += "https://hackin.online/"+ path2 +vetImages.stream.filename+"<newline>";
    }
    else{
      await vetImages.moveAll(path,(file)=>{
        vetImagesLinks += "https://hackin.online/"+ path2 +file.stream.filename+"<newline>";
        return {
          overwrite: true
        }
       });
       if (!vetImages.movedAll()) {
        return vetImages.errors()
        }
    }
    return vetImagesLinks;
  }
  async index ({  }) {
    const news = await Materia.query()
    .select('route_id','image_url','title', 'subtitle','creador',"created_at")
    .orderBy('created_at','desc')
    .limit(15).fetch()
    return news;
  }

  
  async create ({ request, response, view }) {
  }

  
  async store ({ auth, request, response }) {
    await auth.getUser()
    const data = request.only(["title","subtitle","creador","route_id","intro","dev","coc"]);
    data.vet_links = request.input("vetLinks");
    
    const path = Helpers.publicPath('uploads/'+data.route_id);
    const path2 = 'uploads/'+data.route_id+"/";

    data.image_url = await this.moveImage(request.file("image"),path,path2);
    data.vet_images = await this.moveImagesVet(request.file("vetImages"),path,path2);

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
