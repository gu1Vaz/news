'use strict'

const Admin = use('App/Models/Admin')

class AdminSeeder {
  async run () {
    await Admin.createMany([
      {
        username:"None Gui",
        email:"guiBoladao3.0None",
        password:"desireNull1vz2"
      }
    ])
  }
}

module.exports = AdminSeeder
