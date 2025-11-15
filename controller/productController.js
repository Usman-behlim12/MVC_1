const productModel = require("../models/productModel");

const addProduct = async(req,resp)=>{
    try {
        const {pname,img,price,category} = req.body
        await productModel.create({pname,img,price,category})
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct =async(req,resp)=>{
    try {
        await productModel.findByIdAndDelete(req.params.id);
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
    }
}



module.exports ={addProduct,deleteProduct}