
const pg=require("pg")
require('dotenv').config()
const responses=require("./api_Responses")
const { v4: uuidv4 } = require('uuid')
uuidv4()

const {Client}=require("pg")
const{host,port,user,database,password}=process.env
const dboptions={
  host:host,
  port:port,
  user:user,
  database:database,
  password:password,
 

  sll:{
    rejectUnauthorized:false
  },
  connectionTimeoutMillisec:500


}

//

module.exports.create = async (event) => {
   const response=responses.cors
    const client=new Client(dboptions)
   try{ await client.connect().then(()=>{console.log("conncted to postgress")})
    const data=JSON.parse(event.body)
  // console.log("received data is---","---http method is---",event.httpMethod)
    if(!data){return response("Data is null","400")}
   
    const{title,description,price,count,image}=data
    if(title==""||description==""||price==0||count==0){return response("All Description of product required")}
   console.log(typeof price)
   console.log("received data is---",title,description,price,count,image,"---http method is---",event.httpMethod)
const generetedId=uuidv4()
    

    const resultfromdb=await client.query(
  ` insert into products (id,title , description,price,img)values 
  ('${generetedId}','${title}','${description}',${price},'${image}')`
  )
  await client.query(
  `insert into stocks(product_id,count)values
  ('${generetedId}',${count} )`
)
return response("Product created",200)
}


catch(err){
  return{
    statusCode: 500,
    body: JSON.stringify(err) ,
    headers: {
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*' ,
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
}
}
}






}














//sam local invoke  HelloWorldFunction

//sam local invoke -e ./event.json HelloWorldFunction
//sam local start-api
