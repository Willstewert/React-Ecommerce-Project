const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id:Number,
    brand:String,
    model:String,
    price:Number,
    color:String,
    storage:Number,
    rating:Number,
    image_url:String,
    
});

module.exports = mongoose.model("Product", productSchema);