const mongoose=require('mongoose')
const connectDB=async=()=>{
    try{
        await =mongoose.connect(process.env.datauli)
    }
    catch(err){
        console.error("err conection to db"+err)
    }
}


module.exports = connectDB;
