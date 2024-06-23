const { body, param, query } = require("express-validator");

const validateGetEntriesByEmail = [
    query('email')
        .notEmpty().withMessage("Email should exist to get by email")
        .isEmail().withMessage("Email")
]

const validateCreateEntries = [
    body("title")
        .exists().withMessage("Title of entries is required")
        .isString().withMessage("Title should be string"),
    body("content")
        .exists().withMessage("Entries content is required")
        .isString().withMessage("Content should be string"),
    body("date")
        .exists().withMessage("Entries date is required")
        .isDate().withMessage("Date should be string"),
    body("email")
        .exists().withMessage("Entries email is required")
        .isEmail().withMessage("Valid email is required"),
    body("category")
        .exists().withMessage("Entries category is required")
        .isString().withMessage("Category should be string")
];

const validateUpdateEntries = [
    body("title")
        .exists().withMessage("Title of entries is required")
        .isString().withMessage("Title should be string"),
    body("content")
        .exists().withMessage("Entries content is required")
        .isString().withMessage("Content should be string"),
    body("date")
        .exists().withMessage("Entries date is required")
        .isDate().withMessage("Date should be string"),
    body("email")
        .exists().withMessage("Entries email is required")
        .isEmail().withMessage("Valid email is required"),
    body("category")
        .exists().withMessage("Entries category is required")
        .isString().withMessage("Category should be string"),
    body("old_title")
        .exists().withMessage("Entries category is required")
        .isString().withMessage("Category should be string")
];

const validateDeleteEntry = [
    query('title').notEmpty().withMessage("Title should exist to delete an entry")
];

module.exports = {
    validateGetEntriesByEmail,
    validateCreateEntries,
    validateUpdateEntries,
    validateDeleteEntry
};

// const { param, query, body } = require("express-validator");


// const validateCreateEntries = [
//     body("title")
//         .exists()
//         .withMessage("Title of entries is required")
//         .isString()
//         .withMessage("Title should be string"),
//     body("content")
//         .exists()
//         .withMessage("Entries content is required")
//         .isString()
//         .withMessage("Content should be string"),
//     //  .isLength({ min: 5 })
//     //  .withMessage("Author should be at least 5 characters"),
//     body("date")
//         .exists()
//         .withMessage("Entries date is required")
//         //  .isNumeric()
//         //  .withMessage("date must be numeric"),
//         .isString()
//         .withMessage("Author should be string"),
//     body("email")
//         .exists()
//         .withMessage("Entries email is required")
//         .isString()
//         .withMessage("Author should be string"),
//     body("category")
//         .exists()
//         .withMessage("Entries category is required")
//         .isString()
//         .withMessage("category should be string")
//         // .isLength({ min: 500 })
//         // .withMessage("category at least 500 characters")
// ];

// const validateDeleteEntry = [
//     param('title').notEmpty().withMessage("Title should exist to delete a entries")
// ]

// module.exports = {
//     validateCreateEntries,
//     validateDeleteEntry
// }