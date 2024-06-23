const express = require('express');
const router = express.Router();
const entriesController = require("../controllers/entries.controller");
const { validateGetEntriesByEmail, validateCreateEntries, validateUpdateEntries, validateDeleteEntry } = require("../validators/entries.validators");

router.get('/', validateGetEntriesByEmail, entriesController.getEntries);
router.post('/', validateCreateEntries, entriesController.createEntry);
router.put('/', validateUpdateEntries, entriesController.updateEntry);
router.delete('/', validateDeleteEntry, entriesController.deleteEntry);

module.exports = router;


// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */

// PUT http://localhost:3000/api/entries
// {
//     "title": "Estamos de Lunes de Back 3",
//     "content": "La venganza del elefante relacional SQL",
//     "date": "2024-06-17",
//     "email": "guillermu@thebridgeschool.es",
//     "category": "Software",
//     "old_title": "Estamos de Lunes de Back 2"
// }