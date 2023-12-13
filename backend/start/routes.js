'use strict'

const Route = use('Route')
const path = require('path');

//auths
Route.post("/registrar", "AuthController.registrar");
Route.post("/autenticar", "AuthController.autenticar");
Route.post("/adminHehe", "AuthAdminController.autenticar");


//news
Route.group(() => {
    Route.resource("news", "MateriaController")
        .apiOnly()
}).middleware(['auth:admin']);

Route.get("/allNews", "MateriaController.index");
Route.get("/materia/:id", "MateriaController.show");

//filtro
Route.get("/getCreadores", "MateriaController.getCreadores");

//comments
Route.group(() => {
    Route.resource("comments", "CommentController")
        .apiOnly()
    Route.get("/comments/:id/:offset", "CommentController.showOffSet");
});

//feedback
Route.group(() => {
    Route.resource("feedbacks", "FeedbackController")
        .apiOnly()
}).middleware("auth");
Route.get("/allFeedbacks", "FeedbackController.index");

//busca
Route.group(() => {
    Route.resource("busca", "BuscaController")
        .apiOnly()
});

//user
Route.group(() => {
    Route.resource("user", "UserController")
        .apiOnly()
    Route.post("/update_ft", "UserController.update_ft");
    Route.put('user/:id/edit', 'UserController.edit');
}).middleware("auth");


//defaults
Route.get('/', async ({ view }) => {
    return view.render('principal')
 })

Route.get("/app", "AppController.index").middleware(['auth']);

