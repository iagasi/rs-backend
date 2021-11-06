const axios = require("axios")
require('dotenv').config()

class ProductController{

    async AddNewProduct(req,res,next){

      const response=  await axios.post(process.env.CREATE_PRODUCT,req.body)
await res.send(response.data[0])

    }
}


module.exports=new ProductController()