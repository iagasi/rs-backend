const router=require("./routes.js")
var cors = require('cors')
const express=require("express")
const app=express()

app.use(cors())
app.use(express.json())
app.use(router)
//if route not exists
app.use((req,res,next)=>{res.status(502).send("Cannot process request")})
////
const port=process.env.PORT||5000
app.listen(port,()=>{console.log("server runnig on port--",+port)})