import express, {  Request,Response } from 'express';
import customers from "../data/customers.js"

const customersroute = express.Router();


customersroute.get("/", ( req : Request, res: Response) => {
  res.jsonp(customers);
});


customersroute.get("/:id", (req: Request, res: Response) => {
    const customerId = req.params.id;
    const selectedCustomer = customers.find((item) => item.id === customerId);
    res.json(selectedCustomer);
  })
 

export default customersroute;