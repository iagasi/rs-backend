"use-strict"

const AWS=require("aws-sdk")
const s3=new AWS.S3({region:"eu-west-1"})
const responses=require("./api_Responses")
exports.getUploadUrl = async(event)=> {
const Key=`uploaded/${event.name}`

  


  // Get signed URL from S3
  const s3Params = {
    Bucket: "dev-stage-module6.6",
    Key,
    Expires: 6100,
    ContentType: 'text/csv'
  }
 
  const uploadURL = await s3.getSignedUrlPromise('putObject', s3Params)
//console.log()
return responses.cors(uploadURL)
}


