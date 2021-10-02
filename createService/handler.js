'use strict';
require('dotenv').config()
const {Client}=require("pg")
const responses=require("./api_Responses")
const response=responses.cors

const{host,port,user,database,password}=process.env
const dboptions={
  host:"database-1.c0f3uj4ayzym.eu-west-1.rds.amazonaws.com",
  port:"5432",
  user:"postgres",
  database:"lesson43",
  password:"579207853",
 

  sll:{
    rejectUnauthorized:false
  },
  connectionTimeoutMillisec:500


}
module.exports.hello = async (event) => {
  const response=responses.cors
const client=new Client(dboptions)
  await client.connect().then(()=>{console.log("conncted to postgress")})
  console.log(event.httpMethod)

  try{



 
 
  const product=await client.query(`select * from products`)
  const stock= await client.query(`select *from stocks`)
  const{id,price,title,description}=product.rows

const str= JSON.stringify(product.rows)
const productparsed=JSON.parse(str)

const strstock= JSON.stringify(stock.rows)
const stockparsed=JSON.parse(strstock)

function merge(arr,arr2){
  let data=[]
   arr.forEach(e => {
    arr2.forEach(element => {
      const count=element.count
      if (e.id==element.product_id){data.push({...e,count})}
      
    });
    
  }); 
  return data
  }


  const mergedData= await merge(productparsed,stockparsed)

  console.log(mergedData)





  return response(mergedData)
}
 
//console.log("data is---",u.rows)

// const resultfromdb=await client.query(
//  ` insert into product (title , description,price)values
//  ('GAGGAGAGAGA','good laptop from gelli',1000)`
//  )
//  console.log("result from db is------",resultfromdb.rows)


catch(err){
  response("Database error")
}


 

  
};//
//,(err,response)=>{console.log("response is---",response.rows)}



//sam local invoke  HelloWorldFunction

//sam local invoke -e ./event.json HelloWorldFunction
//sam local start-api






// return{
//   statusCode : 200,
//   body: JSON.stringify( id ),
//   headers: {
//       'Content-Type': 'application/json', 
//       'Access-Control-Allow-Origin': '*' ,
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
// }  }


//,(err,res)=>{console.log("resuly is---",JSON.stringify(res.rows),data=res.rows )