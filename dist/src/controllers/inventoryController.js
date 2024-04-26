import { generateInventoryCakeData, generateInventoryCookiesData, generateInventoryBrowniesData } from "../services/stockServices.js";
import { validationResult } from "express-validator";
export const getInventoryData = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error("Validation error", errors.mapped());
        return;
    }
    try {
        const { inventory } = req.params;
        console.log(inventory);
        let finalInventoryData;
        if (inventory == "cake") {
            console.log(generateInventoryCakeData());
            finalInventoryData = generateInventoryCakeData();
        }
        else if (inventory === "cookies") {
            finalInventoryData = generateInventoryCookiesData();
        }
        else if (inventory === "brownies") {
            finalInventoryData = generateInventoryBrowniesData();
        }
        else {
            res.status(404).send("testt not found");
        }
        res.status(200).json(finalInventoryData);
    }
    catch (error) {
        res.status(500).send("Error in fetching product data");
    }
};
//# sourceMappingURL=inventoryController.js.map