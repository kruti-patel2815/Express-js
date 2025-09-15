const express = require("express")

const app = express()

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    const array = [{name:"sweta",age:22},{name:"vandita",age:40},{name:"uma",age:50}]

    res.render("home",{array})
})

app.listen(3000)