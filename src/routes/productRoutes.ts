import express from "express";
import {getProductData} from "../controllers/productsController.js";
import {validateProductName} from "../validators/validators.js";

const productRoute = express.Router();

productRoute.get ("/:product", validateProductName, getProductData);

export default productRoute;