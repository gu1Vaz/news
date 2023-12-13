'use strict'

const User = use('App/Models/User')
class UserSeeder {
  async run () {
    await User.createMany([
      {
        username:"junin",
        email:"gui@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/makako.jpeg",
        password:"1233"
      },
      {
        username:"tupã",
        email:"gui2@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/4.png",
        password:"1233"
      },
      {
        username:"turzin",
        email:"gui3@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/makako.jpeg",
        password:"1233"
      },
      {
        username:"curinga",
        email:"gui4@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/makako.jpeg",
        password:"1233"
      },
      {
        username:"babi",
        email:"gui5@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/makako.jpeg",
        password:"1233"
      },
      {
        username:"voltan",
        email:"gui6@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/2.png",
        password:"1233"
      },
      {
        username:"xarin",
        email:"gui7@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/3.png",
        password:"1233"
      },
      {
        username:"baqui",
        email:"gui8@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/makako.jpeg",
        password:"1233"
      },
      {
        username:"mobii",
        email:"gui9@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/makako.jpeg",
        password:"1233"
      },
      {
        username:"jordan",
        email:"gui10@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/makako.jpeg",
        password:"1233"
      },
      {
        username:"Todo site bom que voce for, eu vou estar lá",
        email:"julius@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/julius.webp",
        password:"1233"
      }
    ])
  }
}

module.exports = UserSeeder
