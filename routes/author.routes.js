const express = require('express');
const router = express.Router();
const authorsController = require("../controllers/author.controller");
const { validateGetAuthorsByEmail, validateCreateAuthors, validateUpdateAuthors, validateDeleteAuthor } = require("../validators/author.validators");


router.get('/', validateGetAuthorsByEmail, authorsController.getAuthors);
router.post('/', validateCreateAuthors, authorsController.createAuthor);
router.put('/', validateUpdateAuthors, authorsController.updateAuthor);
router.delete('/', validateDeleteAuthor, authorsController.deleteAuthor);

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