// const { validationResult } = require("express-validator"); // medile ware
const Products = require("../models/products.modele");

const get_projects = async (req, res) => {
  const Products = await Products.find(); // get users data from database
  res.json(Products);
};

module.exports = {get_projects};