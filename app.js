const express = require('express');
const connectDB = require('./db/db');
const session = require('express-session');
const router = require('./router/userRouter');
const p_router = require('./router/productRouter');
const methodOverride = require('method-override');
const app = express();
connectDB;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")

app.use(session({
    secret:"bgdsvhbs",
    resave:false,
    saveUninitialized:false
}))
app.use(methodOverride("_method"))
app.use("/",router)
app.use("/", p_router);

app.listen(5000,()=>{
    console.log("running....");
})