const { updateAuthor } = require("../controllers/author.controller");
const { createAuthor } = require("../models/author.model");

const queries = {
    getAllAuthors: `SELECT * FROM authors;`,
    getAuthorsByEmail: `
    SELECT *
    FROM authors
    WHERE email = $1;`,
    createAuthor: `INSERT INTO authors(name, surname, email, image)
    VALUES ($1, $2, $3, $4);`,
    updateAuthor: `UPDATE public.authors
    SET name = $1,
    surname = $2,
    email = $3,
    image = $4
    WHERE email = $5;`,
    deleteAuthor: `DELETE FROM authors
    WHERE email = $1`
}
module.exports = queries;
