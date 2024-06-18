const express = require('express');
// Rutas de productos
const authorsController = require("../controllers/author.controller");
const router = express.Router();

router.get('/', authorsController.getAuthors);
router.post('/', authorsController.createAuthor);
router.put('/', authorsController.updateAuthor);
router.delete('/', authorsController.deleteAuthor);

module.exports = router;

// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/authors
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */

// PUT http://localhost:3000/api/authors
// {
//     "title": "Estamos de Lunes de Back 3",
//     "content": "La venganza del elefante relacional SQL",
//     "date": "2024-06-17",
//     "email": "guillermu@thebridgeschool.es",
//     "category": "Software",
//     "old_title": "Estamos de Lunes de Back 2"
// }