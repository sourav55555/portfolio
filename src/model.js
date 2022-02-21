const mongoose= require('mongoose');
const validator= require('validator');

mongoose.connect('mongodb://localhost:27017/portfolioData')
.then(()=>{
    console.log('mongo connected');
}).catch((e)=>{
    console.log(e);
});

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