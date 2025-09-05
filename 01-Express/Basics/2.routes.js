const express = require("express");

const app = express();
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Noise-cancelling over-ear wireless headphones with Bluetooth 5.0.",
    price: 89.99,
    category: "Electronics",
    imageURL: "https://example.com/images/headphones.jpg",
    inStock: true,
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    description: "Eco-friendly t-shirt made from 100% organic cotton.",
    price: 25.0,
    category: "Clothing",
    imageURL: "https://example.com/images/tshirt.jpg",
    inStock: true,
  },
  {
    id: 3,
    name: "Espresso Machine",
    description:
      "Compact espresso machine with milk frother and adjustable settings.",
    price: 149.99,
    category: "Home & Kitchen",
    imageURL: "https://example.com/images/espresso.jpg",
    inStock: false,
  },
  {
    id: 4,
    name: "Running Shoes",
    description: "Lightweight and durable running shoes for everyday training.",
    price: 74.99,
    category: "Footwear",
    imageURL: "https://example.com/images/shoes.jpg",
    inStock: true,
  },
];

// GET
app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:productId", (req, res) => {
  const productId = Number(req.params.productId);
  const product = products.find((product) => product.id === productId);
  product ? res.json(product) : res.status(404).send("Product not found");
});

const port = 8888;
app.listen(port, () => {
  console.log("Server is started on the port 🚀", port);
});
