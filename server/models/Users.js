const mongoose=require("mongoose")
const addressSchema = require("./Address");
const usersSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        require :true
    },
    address: addressSchema
    ,phone:{
        type:String,
        require:true
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Users',usersSchema)