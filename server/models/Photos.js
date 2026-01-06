const mongoose=require("mongoose")
const photosSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    imagurl:{
        type:String,
        required:true,
    },
    
},{
    timestamps:true
})
module.exports=mongoose.model('Photos',photosSchema)