const express = require('express')
const crud = express()
const fs = require ('fs')

let setData = []
let editId = null

const readData = fs.readFileSync('data.json','utf-8')

if(readData != ""){
    setData = JSON.parse(readData)
}
crud.set('view engine','ejs')
crud.get('/',(req,res)=>{
    res.render('crudpage',{setData},editData = null)
})

crud.get('/createData',(req,res)=>{
    const data = req.query

    if(editId != null){
        setData[editId]=data
    }
    else
    {
        setData.push(data)
    }
    fs.writeFileSync('data.json',JSON.stringify(setData))

    res.redirect('/')
})

crud.get('/deleteData/:id',(req,res)=>{
    const deleteId = req.params.id
    setData.splice(deleteId,1)
    fs.writeFileSync('data.json',JSON.stringify(setData))
    res.redirect('/')
})

crud.get('/editData/:id',(req,res)=>{
    editId = req.params.id
    const editData = setData[editId]
    res.render('crudpage',{editData,setData})
})
crud.listen(3000)