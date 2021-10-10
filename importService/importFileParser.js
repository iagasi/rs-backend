const responses=require("./api_Responses")
const csv=require("csv-parser")
const AWS=require("aws-sdk")

const ImportFileHAndler = require("./importFileHandler")

const Bucket='dev-stage-module6.6'

let params
 let s3
 let arraydata=[]

exports.fileParser = (event) => {
    
 
   
 s3 = new AWS.S3({region: 'eu-west-1'});
  
    event.Records.forEach(async(record) => {
        
            params={
        Bucket:Bucket,
        Key:record.s3.object.key
      }
 
//
const handler= new ImportFileHAndler(s3,params,record,Bucket)
const s3Stream= await handler.getObject()

    console.log("data received")
  
      s3Stream.pipe(csv())
        .on('data', data => {
         // console.log("Generate Sql script-from json",data);
         
        
        arraydata.push(data)
        })
       .on('end',async()=>{


       handler.createProductInDatabase(AWS,arraydata)  
 

  //

       const copyObject= handler.copyObject()
       const deleteObject= handler.deleteObject()
    

        console.log("the end")
    }) 
         
       })
    }
//