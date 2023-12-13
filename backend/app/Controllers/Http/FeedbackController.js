'use strict'
const Feedback = use("App/Models/Feedback");

class FeedbackController {
  async index ({ request, response, view }) {
    const feedbacks = await Feedback.query()
    .select("users.username", "feedbacks.value")
    .leftJoin("users", "feedbacks.user_id", "users.id")
    .fetch();
    return feedbacks;
  }
  async create ({ request, response, view }) {
  }
  async store ({ auth, request }) {
    const user = await auth.getUser()
    const data = request.only(["value"]);
    data.user_id = user.id;
    const feedback = await Feedback.create(data);
    feedback.username =user.username;
    return feedback;
  }
  async show ({ params, request, response, view }) {
  }
  async edit ({ params, request, response, view }) {
  }
  async update ({ params, request, response }) {
  }
  async destroy ({ params, request, response }) {
  }
}
module.exports = FeedbackController
