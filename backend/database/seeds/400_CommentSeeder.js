'use strict'

const Comment = use('App/Models/Comment')
const Factory = use('Factory')

class CommentSeeder {
  async run () {
    await Comment.createMany([
      {
        materia_id:"1",
        value:"Achou que eu tava brincando?",
        user_id:"11"
      },
      {
        materia_id:"1",
        value:"tank yo",
        user_id:"1"
      },
      {
        materia_id:"1",
        value:"trava zap camelo v7-*9999999* *9999999*",
        user_id:"2"
      },
      {
        materia_id:"1",
        value:"venda de hinode: novo.hinode.com",
        user_id:"7"
      },
      {
        materia_id:"1",
        value:"alert(1)",
        user_id:"6"
      }
    ])
  }
}

module.exports = CommentSeeder