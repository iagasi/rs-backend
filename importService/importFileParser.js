const responses=require("./api_Responses")
const csv=require("csv-parser")
const AWS=require("aws-sdk")
require('dotenv').config()

const ImportFileHAndler = require("./importFileHandler")

const Bucket='dev-stage-module5.2'

let params
 let s3
 let jsondata
exports.fileParser = (event) => {
    
 
   
 s3 = new AWS.S3({region: 'us-east-1'});
  
    event.Records.forEach(async(record) => {
        
            params={
        Bucket:Bucket,
        Key:record.s3.object.key
      }
    console.log(record.s3.object.key)

const handler= new ImportFileHAndler(s3,params,record,Bucket)
const s3Stream= await handler.getObject()

    
  
      s3Stream.pipe(csv())
        .on('data', data => {
          console.log("Generate Sql script-from json",data);
          
        jsondata=data
        })
       .on('end',async()=>{
       
  handler.createproducts(jsondata)

       const copyObject= handler.copyObject()
        const deleteObject= handler.deleteObject()
    

        console.log("the end")
    }) 
         
       })
    }
    