import express from 'express';
import customers from "../data/customers.js";
const customersroute = express.Router();
customersroute.get("/", (req, res) => {
    res.jsonp(customers);
});
customersroute.get("/:id", (req, res) => {
    const customerId = req.params.id;
    const selectedCustomer = customers.find((item) => item.id === customerId);
    res.json(selectedCustomer);
});
export default customersroute;
//# sourceMappingURL=customerRoutes.js.map