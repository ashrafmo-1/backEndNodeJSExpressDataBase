const { products } = require("../data/products"); // productsData
const { validationResult } = require("express-validator"); // middleware

const getAll = (req, res) => {
  res.json(products);
  // console.log(products);
};
// show single product 
const getSingleProduct = (req, res) => {
  const product_id = +req.params.product_id; // + > to main return integer number only
  const product = products.find((product) => product.id === product_id);
  if (!product) res.status(404).json({ message: "id not found!" });
  res.json(product);
};
// add new product to DB
const addNewProduct = (req, res) => {
  console.log(req.body); // show product in console
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json(error.array());
  }
  const product = { id: products.length + 1, ...req.body };
  products.push(product);
  res.status(201).json(product);
};
const chngeProductData = (req, res) => {
  const product_id = +req.params.product_id;
  let IndexProd = products.findIndex((prod) => prod.id === product_id);
  if(IndexProd === -1) {
    return res.status(404).json({message: "id not found!"});
  }
  products[IndexProd] = {...products[IndexProd], ...req.body};
  res.status(200).json(products[IndexProd]);

  // try {
  //   const renameData = await products.findByIdAndUpdate(product_id, {$set: {...req.body}}, {new: true});
  // }catch(error) {
  //   return res.status(500).json({message: "error feeen" + error.message});
  // }
};

// remove product by id from DB <=
const delProduct = (req, res) => {
  const product_id = +req.params.product_id;
  const filteredProducts = products.filter((product) => product.id !== product_id);
  if (products.length === filteredProducts.length) {
    return res.status(404).json({ error: "Product not found" });
  }
  products.length = 0; // Clear the original array
  products.push(...filteredProducts); // Push all filtered products back into the original array
  res.status(200).json({ success: "done" });
};

module.exports = {
  getAll,
  getSingleProduct,
  addNewProduct,
  chngeProductData,
  delProduct,
};
