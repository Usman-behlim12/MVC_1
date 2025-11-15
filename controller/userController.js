const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');

const register = async(req,resp)=>{
    try {
        const {username,email,password}= req.body
        const hashPassword = await bcrypt.hash(password,10);
        await userModel.create({username,email,password:hashPassword})
        resp.redirect("/login");
    } catch (error) {
        console.log(error);
    }
}

const login = async(req,resp)=>{
    try {
        const {username,password} = req.body;
        // find user exist based on username 
        const user = await userModel.findOne({username});
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.username = username
            resp.redirect("/dashboard");
        }
        else{
            resp.redirect("/login")
        }
    } catch (error) {
        console.log(error);
    }
}

const dashboard =async (req,resp)=>{
    try {
        if (!req.session.username) {
            resp.redirect("/login")
        } else {
            const data = await productModel.find()
            resp.render("dashboard",{username:req.session.username,data})
        }
    } catch (error) {
        console.log(error);
    }
}

const logout =(req,resp)=>{
    req.session.destroy(()=>{
        resp.redirect("/login")
    })
}

module.exports = {register,login,dashboard,logout}




