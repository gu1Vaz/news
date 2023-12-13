'use strict'

const Admin = use('App/Models/Admin')

class AdminSeeder {
  async run () {
    await Admin.createMany([
      {
        username:"Gui",
        email:"gui@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/gato.jpg",
        password:"1233"
      },
      {
        username:"Jão Marcelo",
        email:"gui2@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/makako.jpg",
        password:"1233"
      },
      {
        username:"Fasbinder",
        email:"gui3@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/makako.jpg",
        password:"1233"
      },
      {
        username:"Paulo",
        email:"gui4@gmail.com",
        image_url: "http://127.0.0.1:3333/uploads/admin/makako.jpg",
        password:"1233"
      }
    ])
  }
}

module.exports = AdminSeeder
