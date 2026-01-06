require("dotenv").config()
const express=require("express")
const cors=require("cors")
const corsOptions=require("./config/corsOptions")
const conectoDb=require("./config/dbConn")
const { mongo, default: mongoose } = require("mongoose")
const PORT=process.env.PORT||7001
const app=express()
conectoDb()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/api/photos",require("./routes/photos"))
app.use("/api/post",require("./routes/post"))
app.use("/api/todos",require("./routes/todos"))
app.use("/api/users",require("./routes/users"))


mongoose.connection.once('open',()=>{
    console.log("conected to mongodb")
    app.listen(PORT,()=>{console.log(`server running on port${PORT}`)})
})
mongoose.connection.on('error',err=>{console.log(err)})