// const { Pool } = require('pg');
const queries = require('../queries/author.queries') // Queries SQL
const pool = require('../config/db_pgsql');

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     port: '5432',
//     database: 'postgres',
//     password: '123456'
// });

// GET
const getAuthorsByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorsByEmail, [email])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [name, surname, email, image]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor, [email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const updateAuthor = async (author) => {
    const { name, surname, email, image, old_email } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor, [name, surname, email, image, old_email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const authors = {
    getAuthorsByEmail,
    getAllAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor
}

module.exports = authors;


// Pruebas

// getAuthorsByEmail("birja@thebridgeschool.es")
// .then(data=>console.log(data))

// getAllAuthors()
// .then(data=>console.log(data))

// let newAuthor = {
//     name: "Diego",
//     surname: "Blazquez",
//     email: "diego3@thebridgeschool.es",
//     image: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
// }
// createAuthor(newAuthor)
//     .then(data => console.log(data))

// const updatedAuthor = {
//     name: "Diego",
//     surname: "Peruanada",
//     email: "diego3@thebridgeschool.es",
//     image: "peruanada.jpg",
//     old_email: "diego@diego.es"
// }

// updateAuthor(updatedAuthor)
//     .then(data => console.log(data))

// deleteAuthor('diego3@thebridgeschool.es').then(data => console.log(data));