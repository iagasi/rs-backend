<<<<<<< HEAD


const AWS = require("aws-sdk")
const create = require("./create")

let product={};
let forsend=[]
module.exports.catalogBatchProcess = async (event) => {
  const sns = new AWS.SNS()

  const data = await event.Records.map(async (el) => {
    
      product=await el.body;
    forsend.push(JSON.parse(el.body))
 
    
   })


//console.log("data-----",  forsend)
 
  



await create(forsend)


 sns.publish({
  Subject:"Created Products",
  Message:JSON.stringify(forsend),
  TopicArn:process.env.TOPIC_ARN

},async ()=>{
 
})

 return forsend

}



=======


const AWS = require("aws-sdk")
const create = require("./create")

let product={};
let forsend=[]
module.exports.catalogBatchProcess = async (event) => {
  const sns = new AWS.SNS()
console.log(event)
  const data = await event.Records.map(async (el) => {
    
      product=await el.body;
    forsend.push(JSON.parse(el.body))
 
    
   })



 
  

console.log(forsend)

await create(forsend)


sns.publish({
  Subject:"Created Products",
  Message:JSON.stringify(forsend),
  TopicArn:process.env.TOPIC_ARN

},()=>{
 
 console.log("Data sended")})
console.log("data-----",data)


}
>>>>>>> d1700ba302807905038ffebab90817901ff29931
