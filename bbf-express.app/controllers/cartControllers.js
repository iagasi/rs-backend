const axios = require("axios")
require('dotenv').config()
class CartController {

    async getProductsInCart(req, res, next) {

        try {
            const data = await axios.get(process.env.GET_PRODUCTS_IN_CART)
            
        //    // .then(data => res.send(data))
        //     //.catch(err => next(err));

          console.log(data)
          //return statuscode from main app
         res.send(data.data)
        }
        catch (err) {
            res.send(err)
        }
        console.log("getproductc")
    }

    async removeFromCxart(){

    }

    async ModifyProductsInCart(req,res,next){
        // const buffer=[]
        // buffer.push(user.body)


       console.log(process.env.MODIFY_PRODUCTS)
        const data = await axios.put(process.env.MODIFY_PRODUCTS,req.body)
//console.log(data.data)
//return statuscode from main app
await res.send(data.data)

    }
}


module.exports = new CartController()