import express from 'express';
import { getInventoryData } from "../controllers/inventoryController.js";
import { getAllInventoryData } from "../controllers/allInventory.js";
const inventoryroute = express.Router();
inventoryroute.get("/:inventory", getInventoryData);
inventoryroute.get("/", getAllInventoryData);
export default inventoryroute;
//# sourceMappingURL=stockRoutes.js.map