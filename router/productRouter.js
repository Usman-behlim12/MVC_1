const express = require('express');
const { addProduct, deleteProduct, updateForm } = require('../controller/productController');

const p_router = express.Router();

p_router.get("/add", (req, resp) => {
  resp.render("add");
});
p_router.post("/add", addProduct);
p_router.delete("/delete/:id",deleteProduct)
p_router.get("/edit/:id",updateForm)

module.exports = p_router;