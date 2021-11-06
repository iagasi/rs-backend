const Router=require("express").Router
const router= Router()
const CartController=require("./controllers/cartControllers")
const ProductController=require("./controllers/productController")

router.get("/",(req,resr)=>{resr.send("BBF service")})
router.get("/cart/profile/cart",CartController.getProductsInCart)
router.put("/cart/profile/cart",CartController.ModifyProductsInCart)
router.put("/product/create",ProductController.AddNewProduct)
module.exports=router