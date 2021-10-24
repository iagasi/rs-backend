const SqlHandler=require("./sqlHandler")

//

const { Pool } = require("pg")

const { host, port, user, database, password } = process.env
const dboptions = {
  host: host,
  port: port,
  user: user,
  database: database,
  password: password,


  sll: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillisec: 500


}


let pool
const create = async (event) => {
  pool=new Pool(dboptions)
  const client=await  pool.connect()
  
  

 try{

event.forEach(async(element) => {
   const sqlhandler=new SqlHandler(client)
  const{title,description,price,amount,image}= element




await sqlhandler.createTableIfNotExists()
await sqlhandler.createProducts(title,description,price,image,amount)
}



  
);

 }

catch (error){console.log("create error is--------",error)}
finally{}
}

module.exports = create











//sam local invoke  HelloWorldFunction

//sam local invoke -e ./event.json HelloWorldFunction
//sam local start-api
