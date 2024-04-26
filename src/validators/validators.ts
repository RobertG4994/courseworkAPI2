import {param} from "express-validator";

export const validateProductName = param("product")
.isString()
.isIn(["cake","cookies", "brownies"])
.withMessage("Product name must be either cake or cookies");


