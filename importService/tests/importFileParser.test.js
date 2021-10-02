jest.mock("../importFileHandler.js")

const importFileHandler=require("../importFileHandler")

require('dotenv').config()


const AWS=require("aws-sdk")
const s3 = new AWS.S3({region: process.env.Region});
const Bucket=process.env.Bucket
const params={
  Bucket:Bucket,
  Key:process.env.UPLOAD_FOLDER
}

const record={s3:{object:{key:"Name of file"}}}



describe("testing getting,moving,deleting file",()=>{
 const FileHandler=new importFileHandler(s3,params,record,Bucket)
    test("Getting File from s3 bucket",async()=>{
const res=await FileHandler.getObject()
    expect(res).toBeDefined()
        

   })


   test("Copy file.csv from uploaded to Parsed folder",async()=>{

   })
})