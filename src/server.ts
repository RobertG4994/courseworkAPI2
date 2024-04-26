import express from "express";
import cors from "cors";
import productRoute from "./routes/productRoutes.js"
import inventoryRoute from "../src/routes/stockRoutes.js"
import customersRoute from "../src/routes/customerRoutes.js"
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;
app.use ("/api/product", productRoute)
app.use("/api/inventory", inventoryRoute)
app.use("/api/customers", customersRoute)
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});