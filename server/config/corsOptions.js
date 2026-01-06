const allowedOrigins=[
    'http://localhost:3000','http://localhost:5000','http://localhost:3001'
]
const corsOptions={
    origin:(origin,callback)=>{
        if(allowedOrigins.indexOf(origin)!==-1||!origin)
            callback(null,true)
        else callback(new Error("not allowed by cors"))
    },Credential:true,
    OptionsSuccessStatus:200
}
module.exports =corsOptions