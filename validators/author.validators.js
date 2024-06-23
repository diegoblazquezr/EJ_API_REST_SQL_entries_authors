const { body, param, query } = require("express-validator");

const validateGetAuthorsByEmail = [
    query('email')
        .notEmpty().withMessage("Email should exist to get by email")
        .isEmail().withMessage("Email")
]

const validateCreateAuthors = [
    body("name")
        .exists().withMessage("Name of authors is required")
        .isString().withMessage("Name should be string"),
    body("surname")
        .exists().withMessage("Authors surname is required")
        .isString().withMessage("Surname should be string"),
    body("email")
        .exists().withMessage("Authors email is required")
        .isEmail().withMessage("Valid email is required"),
    body("image")
        .exists().withMessage("Authors Image is required")
        .isString().withMessage("Image should be string")
];

const validateUpdateAuthors = [
    body("name")
        .exists().withMessage("Name of authors is required")
        .isString().withMessage("Name should be string"),
    body("surname")
        .exists().withMessage("Authors surname is required")
        .isString().withMessage("Surname should be string"),
    body("email")
        .exists().withMessage("Authors email is required")
        .isEmail().withMessage("Valid email is required"),
    body("image")
        .exists().withMessage("Authors Image is required")
        .isString().withMessage("Image should be string"),
    body("old_email")
        .exists().withMessage("Old email is required")
        .isEmail().withMessage("Old_email wrong format")
];

const validateDeleteAuthor = [
    query('email').notEmpty().withMessage("Email should exist to delete an author")
];

module.exports = {
    validateGetAuthorsByEmail,
    validateCreateAuthors,
    validateUpdateAuthors,
    validateDeleteAuthor
};