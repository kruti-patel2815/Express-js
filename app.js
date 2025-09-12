const express = require("express")

const app = express()

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.send("Hello!!")
})
app.get("/about",(req,res)=>{
    res.send("About")
})
app.get("/Contact",(req,res)=>{
    res.render("index")
})
app.get("/support",(req,res)=>{
    res.redirect("/")
})

app.listen(3000)