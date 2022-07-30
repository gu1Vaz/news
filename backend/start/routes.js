'use strict'

const Route = use('Route')
const path = require('path');

Route.post("/adminHehe", "AuthAdminController.autenticar");

Route.group(() => {
    Route.resource("news", "MateriaController")
        .apiOnly()
}).middleware(['auth:admin']);

Route.get("/allNews", "MateriaController.index");
Route.get("/materia/:id", "MateriaController.show");


Route.get('/', async ({ view }) => {
    return view.render('principal')
 })
Route.get("/app", "AppController.index").middleware(['auth']);

