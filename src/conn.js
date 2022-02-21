const mongoose= require('mongoose');
const { ERRORS } = require('socks/typings/common/constants');
const validator= require('validator');



const portfolioSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if (!validator.isEmail(value)){
                throw new ERRORS('invalid email');
            }
        }
    },
    message:{
        type:String,
        required:true
    }
})

const Portfolio= new mongoose.model("getData",portfolioSchema);

module.exports= Portfolio;