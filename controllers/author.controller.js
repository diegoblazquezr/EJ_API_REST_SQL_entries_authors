const author = require('../models/author.model'); // Importar el modelo de la BBDD
const { validationResult } = require("express-validator");

//getAuthors
// if(hay email)
//     busca por mail
// else
//     busca todo

// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
const getAuthors = async (req, res) => {
    let authors;
    try {
        if (req.query.email || req.query.email == "") {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            authors = await author.getAuthorsByEmail(req.query.email);
        }
        else {
            authors = await author.getAllAuthors();
        }
        res.status(200).json(authors); // [] con las authors encontradas
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//createAuthor
// POST http://localhost:3000/api/authors
// let newAuthor = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear author por email
const createAuthor = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newAuthor = req.body; // {title,content,email,category}
    if (
        "name" in newAuthor &&
        "surname" in newAuthor &&
        "email" in newAuthor &&
        "image" in newAuthor
    ) {
        try {
            const response = await author.createAuthor(newAuthor);
            res.status(201).json({
                items_created: response,
                data: newAuthor,
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};

/*
{
    "name": "Diego",
    "surname": "Blazquez",
    "email": "diego4@thebridgeschool.es",
    "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
}
*/

// PUT http://localhost:3000/api/authors
const updateAuthor = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const modifiedAuthor = req.body;
    if (
        "name" in modifiedAuthor &&
        "surname" in modifiedAuthor &&
        "email" in modifiedAuthor &&
        "image" in modifiedAuthor &&
        "old_email" in modifiedAuthor
    ) {
        try {
            const response = await author.updateAuthor(modifiedAuthor);
            res.status(201).json({
                items_updated: response,
                data: modifiedAuthor,
            });
        } catch (error) {
            res.status(500).json({ error: "Error en la BBDD" });
        }
    } else {
        res.status(400).json({ error: "Faltan campos en la entrada" });
    }
};
/*
{
    "name": "Diego",
    "surname": "Blazquez",
    "email": "diego1@thebridgeschool.es",
    "image": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    "old_email": "diego4@thebridgeschool.es"
}
*/
const deleteAuthor = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let authors;
    try {
        authors = await author.deleteAuthor(req.query.email);
        res.status(200).json(authors); // [] con las authors encontradas
    } catch (error) {
        res.status(500).json({ error: 'Error en la BBDD' });
    }
}

module.exports = {
    getAuthors,
    createAuthor,
    deleteAuthor, // DELETE
    updateAuthor // PUT
}