import { generateCakeData, generateCookiesData, generateBrowniesData } from "../services/productServices.js";
import { validationResult } from "express-validator";
export const getProductData = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error("Validation error", errors.mapped());
        return;
    }
    try {
        const { product } = req.params;
        console.log(product);
        let finalProductData;
        if (product == "cake") {
            console.log(generateCakeData());
            finalProductData = generateCakeData();
        }
        else if (product === "cookies") {
            finalProductData = generateCookiesData();
        }
        else if (product === "brownies") {
            finalProductData = generateBrowniesData();
        }
        else {
            res.status(404).send("Product not found");
        }
        res.status(200).json(finalProductData);
    }
    catch (error) {
        res.status(500).send("Error in fetching product data");
    }
};
//# sourceMappingURL=productsController.js.map