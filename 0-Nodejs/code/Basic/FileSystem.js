const fs = require("fs");
const path = require("path");

//path
const productFilePath = path.join(__dirname, "data", "products.json");

// # SYNC
//Read
const data = fs.readFileSync(productFilePath, "utf-8");
const products = JSON.parse(data);
console.log(products);
//write
const newProduct = {
  id: products.length + 1,
  name: "Smart Watch",
  price: 2999,
  inStock: true,
  category: "Electronics",
};
const updatedProducts = [...products, newProduct];
fs.writeFileSync(
  productFilePath,
  JSON.stringify(updatedProducts, null, 2),
  "utf-8"
);

// # ASYNC

const filePath = path.join(__dirname, "data", "sample.txt");

fs.writeFile(filePath, "Hello, Node.js callback world!", "utf-8", (error) => {
  if (fs.existsSync)
    if (error) {
      console.log("File creation failed", error);
      return;
    } else {
      console.log("File is created successfully");
    }
});

fs.readFile(filePath, "utf-8", (data, error) => {
  if (error) {
    console.log("Cannot read file: ", error);
    return;
  } else {
    console.log("File Content: ", data);
  }
});
