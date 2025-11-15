const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

const productModel = mongoose.model("product",productSchema)

module.exports = productModel