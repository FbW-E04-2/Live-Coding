const {body,check} = require("express-validator")

let validationMiddlewares = [
  body("firstname")
    .isLength({ min: 5, max: 20 })
    .withMessage("please firstname shouldn't be less than 5 chars long"),
    check("lastname","please enter something as lastname").not().isEmpty() , 
  body("email").isEmail().withMessage("please provide a valid email address"),
  body("password","please dont use common words as password")
    .not()
    .isIn(["1234", "abcd", "hello"])
    /* .withMessage("please dont use common words as password"), */
];

module.exports = validationMiddlewares;
