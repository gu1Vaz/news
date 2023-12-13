'use strict'

const Comment = use("App/Models/Comment");
const Materia = use("App/Models/Materia");

class CommentController {
  async index ({ request, response, view }) {
  }
  async create ({ request, response, view }) {
  }
  async store ({ auth, request, response }) {
    await auth.getUser()
    const user_id = auth.user.id;

    const data = request.only(["value","materia_id"]);
    data.user_id = user_id;

    const materia = await Materia.find(data.materia_id)
    materia.num_comments +=1
    materia.save()
    
    let comment = await Comment.create(data);
    comment = await Comment.query()
    .where("comments.id", comment.id)
    .select("username", "value", "comments.created_at", "image_url") 
    .orderBy('comments.id', 'desc')
    .rightJoin('users', 'users.id', 'comments.user_id')
    .fetch()
    return comment;
  }
  async show ({ params, request, response, view }) {
    const comments= await Comment.query()
    .where("materia_id", params.id)
    .select("username", "value", "comments.created_at", "image_url") 
    .orderBy('comments.id', 'desc')
    .rightJoin('users', 'users.id', 'comments.user_id')
    .limit(15).fetch()
    return comments;
  }
  async showOffSet ({ params, request, response, view }) {
    const comments= await Comment.query()
    .where("materia_id", params.id)
    .select("username", "value", "comments.created_at", "image_url")
    .orderBy('comments.id', 'desc')
    .rightJoin('users', 'users.id', 'comments.user_id')
    .offset(params.offset).limit(15).fetch()
    return comments;
  }
  async edit ({ params, request, response, view }) {
  }
  async update ({ params, request, response }) {
  }
  async destroy ({ params, request, response }) {
  }
}

module.exports = CommentController
