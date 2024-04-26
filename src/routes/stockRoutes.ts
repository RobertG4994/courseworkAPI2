import express from 'express';
//import items from "../data/items.js"
import {getInventoryData} from "../controllers/inventoryController.js";
import {getAllInventoryData} from "../controllers/allInventory.js"
const inventoryroute = express.Router();
inventoryroute.get ("/:inventory",  getInventoryData);
inventoryroute.get("/", getAllInventoryData)
 

 
  
  
export default inventoryroute;