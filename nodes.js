const express= require('express');
const app= express();
const mongoose= require('mongoose');
const path= require('path');
const Portfolio= require('./src/model');
const hbs =require('hbs');

const port= process.env.PORT || 2000;

const staticPath=(path.join(__dirname,"/public"))
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/alert',(req,res)=>{
    res.render('alert');
})
app.post("/", async(req,res)=>{
    try{
       const submitData= new Portfolio({
           name:req.body.name,
           email: req.body.email,
           message: req.body.message
       })
       const submited = await submitData.save();
       
       res.render('alert');
    }catch(e){
        res.send(e);
        console.log('no data');
    }
})

app.listen(port,()=>{
    console.log("connected");
})