

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



