const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ProductsRouter = require("./Routes/Projects.route")
const DBurl = 'mongodb+srv://ashrafmohamed1176:TOgMZCglmXsb3vhA@users.r4ytxl8.mongodb.net/Quotation?retryWrites=true&w=majority&appName=products';

mongoose.connect(DBurl).then(() => {
  console.log("Connect success");
}).catch(err =>  console.log(err));

app.use(express.json()); // Node.js body parsing middleware.
app.use("/api/products", ProductsRouter);

app.listen(3500, () => { console.log("hosting server started on port: 1000") });