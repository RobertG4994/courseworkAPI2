import { Request,Response } from "express";
import{
    generateInventoryCakeData,
    generateInventoryCookiesData,
    generateInventoryBrowniesData
} from "../services/stockServices.js";



export const getAllInventoryData = async (req: Request, res: Response) => {
    try{
        const cakeInventoryData = generateInventoryCakeData()
        const cookiesInventoryData = generateInventoryCookiesData();
        const browniesInventoryData = generateInventoryBrowniesData();
        const inventorydata ={cakeInventoryData,cookiesInventoryData,browniesInventoryData}
        res.status(200).json(inventorydata);
    } catch(error){
        res.status(500).send("Error in fetching product data");
    }
};