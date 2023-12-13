'use strict'

const Materia = use("App/Models/Materia");

class BuscaController {
  async index ({ request, response, view }) {
  }
  async show ({ params }) {
    const materias= await Materia.query()
    .where('title', 'LIKE', '%'+params.id+'%')
    .orWhere('route_id', 'LIKE', '%'+params.id+'%')
    .select("id","route_id", "title", "subtitle", "image_url", "creador") 
    .fetch()
    return materias;
  }
  async update({ request, params }) {
    const { id } = params;
  
    const allowedFields = ['creador', 'num_comments','title', 'subtitle', 'intro', 'dev', 'coc', 'created_at'];
  
    const requestData = { ...request.all() };
    delete requestData.id;
  
    const filteredData = Object.entries(requestData)
      .filter(([key, value]) => allowedFields.includes(key) && value)
      .reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});
  
    let materiasQuery = Materia.query().where('title', 'LIKE', `%${id}%`);
    materiasQuery = materiasQuery.orWhere('route_id', 'LIKE', `%${id}%`);
  
    for (const key in filteredData) {
      const value = filteredData[key];
      if (key === 'creador') {
        materiasQuery = materiasQuery.where('creador', value);
      } else if (key === 'num_comments' || key === 'created_at') {
        materiasQuery = materiasQuery.where(key, '>=', value);
      } else {
        materiasQuery = materiasQuery.where(key, 'LIKE', `%${value}%`);
      }
    }
  
    const result = await materiasQuery.fetch();
    return result.toJSON();
  }  
}
module.exports = BuscaController
