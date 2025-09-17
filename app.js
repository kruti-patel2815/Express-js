// const express = require("express")
// const app = express()
// const fs = require("fs")

// let setData = []

// const readData = fs.readFileSync("data.json")

// if(readData != "")
// {
//     setData = JSON.parse(readData)
// }

// app.set("view engine","ejs")
// app.get("/",(req,res)=>{
//     res.render("home",{setData})
// })

// app.get("/createData",(req,res)=>{
//     const data = req.query
//     setData.push(data)
//     fs.writeFileSync("data.json",JSON.stringify(setData))
//     res.redirect("/")
// })

// app.listen(3000)

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get("/", (req, res) => {
    const arrayobj = [
        { name: "milan", sub1: 78, sub2: 56, sub3: 89 },
        { name: "kriya", sub1: 98, sub2: 60, sub3: 80 },
        { name: "shreya", sub1: 68, sub2: 59, sub3: 83 },
        { name: "pankaj", sub1: 80, sub2: 64, sub3: 95 },
        { name: "priti", sub1: 67, sub2: 78, sub3: 59 }
    ];

    const total = (i) => parseInt(i.sub1) + parseInt(i.sub2) + parseInt(i.sub3);
    const percentage = (i) => total(i) / 3;
    const min = (s1, s2, s3) => Math.min(parseInt(s1), parseInt(s2), parseInt(s3));
    const max = (s1, s2, s3) => Math.max(parseInt(s1), parseInt(s2), parseInt(s3));

    res.render("home", { arrayobj, total, percentage, min, max });
});

app.listen(3000)

