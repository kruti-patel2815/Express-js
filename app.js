const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get("/", (req, res) => {
    const arrayobj = [
        { name: "milan", sub1: 75, sub2: 58, sub3: 89 },
        { name: "kriya", sub1: 88, sub2: 60, sub3: 80 },
        { name: "shreya", sub1: 68, sub2: 59, sub3: 83 },
        { name: "pankaj", sub1: 90, sub2: 64, sub3: 95 },
        { name: "priti", sub1: 67, sub2: 78, sub3: 59 }
    ];

    const total = (i) => parseInt(i.sub1) + parseInt(i.sub2) + parseInt(i.sub3);
    const percentage = (i) => total(i) / 3;
    const min = (sub1, sub2, sub3) => Math.min(parseInt(sub1), parseInt(sub2), parseInt(sub3));
    const max = (sub1, sub2, sub3) => Math.max(parseInt(sub1), parseInt(sub2), parseInt(sub3));

    res.render("home", { arrayobj, total, percentage, min, max });
});

app.listen(3000)

