import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
const port = process.env.PORT || 5000;

connectDB(); //Connect to MongoDB

// Initialize the Express application
const app = express();

// Basic route to handle GET requests to the root URL ('/')
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send a simple response
});

app.use("/api/products", productRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
