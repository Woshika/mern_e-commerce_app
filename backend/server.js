// Import the Express library
import express from "express";
import products from "./data/products.js";
const port = 5000;

// Initialize the Express application
const app = express();

// Basic route to handle GET requests to the root URL ('/')
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send a simple response
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
