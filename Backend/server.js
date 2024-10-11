import dotenv from "dotenv";
import express from "express";
import productRoutes from "../Backend/routes/product.route.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); //allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("server is running at " + PORT);
});
