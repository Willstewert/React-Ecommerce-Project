const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id:String,
    name:String,
    price:Number,
    description:String

    
});

module.exports = mongoose.model("Filterproduct", productSchema);