const express = require("express");
const app = express();
app.use(express.json()); // search
const productsController = require("./controller/products.controller.js"); // controllers
const { body } = require("express-validator");

app.get("/api/products", productsController.getAll); // get all products from file(array)
app.get("/api/product/:product_id", productsController.getSingleProduct); // get single product from file(array)
app.post(
  "/api/products/",
  body("name")
    .notEmpty()
    .withMessage("must type product name")
    .isLength({ min: 3, max: 22 }),
  body("category")
    .notEmpty()
    .withMessage("must type product category")
    .isLength({ min: 4, max: 22 }),
  productsController.addNewProduct
);
app.patch("/api/product/:product_id", productsController.chngeProductData);
app.delete("/api/product/:product_id", productsController.delProduct);

app.listen("2000", () => {
  console.log("listening server on port : 2000");
});