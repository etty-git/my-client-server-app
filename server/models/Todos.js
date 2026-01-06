const mongoose=require("mongoose")
const addressSchema = require("./Address");
const todosSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    tags:{
        type:[String],
        required:false,
    },
    completed:{
        type:Boolean,
        required:false
    }
},{
    timestamps:true
})
module.exports=mongoose.model('Todos',todosSchema)