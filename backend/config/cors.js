'use strict'

const Env = use('Env')

module.exports = {
  
  origin: Env.get('HOST_GRANT'),

  
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],

  
  headers: true,

  
  exposeHeaders: false,

  
  credentials: false,

  
  maxAge: 90
}
