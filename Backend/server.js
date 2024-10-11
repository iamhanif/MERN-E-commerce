import dotenv from "dotenv";
import express from "express";
import productRoutes from "../Backend/routes/product.route.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json()); //allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("server is running at 5000");
});
