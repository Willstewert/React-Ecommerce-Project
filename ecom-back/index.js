const express = require("express");
const connectDb = require("./Utils/Config");
const User = require("./Utils/User");
const Products = require("./Utils/Product");
const Filterproduct = require("./Utils/Filterproduct");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password });
  user.save();
  res.send(user);
});
app.get("/getUser", async (req, res) => {
  const user = await User.find();
  res.send(user);
});
app.get("/products", async (req, res) => {
  const products = await Products.find();
  res.send(products);
});
app.get("/filterproducts", async (req, res) => {
  const filterproduct = await Filterproduct.find();
  res.send(filterproduct);
});
app.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  const products = await Products.findById({ _id: id });
  res.send(products);
});
app.get("/search/:key", async (req, res) => {
  const products = await Products.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  res.send(products);
});
connectDb()
  .then(() => {
    app.listen(5000, () => {
      console.log("5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
