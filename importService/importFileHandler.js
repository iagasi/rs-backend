

class ImportFileHAndler{
constructor(s3,params,record,Bucket){
    this.params=params
    this.record=record
    this.s3=s3
    this.Bucket=Bucket
}

async createProductInDatabase(AWS,data){
const sqs=new AWS.SQS()


  
data.forEach(async(element) => {
<<<<<<< HEAD
  await sqs.sendMessage({
=======
   await sqs.sendMessage({
>>>>>>> d1700ba302807905038ffebab90817901ff29931
QueueUrl:process.env.SQS_URL,
MessageBody:JSON.stringify(element)
},(err,data)=>{
  if(err){console.log("Quequeuerror occured"+err)}
 if(data) {console.log("Queueworking")}
})

});




}

/////

async createproducts(data){
 const newdata= JSON.stringify(data)
  await this.s3.putObject({
    Bucket: this.Bucket,
    Key: "package.json",
    Body: newdata
    
}).promise()
 
}

   async getObject(){
        const s3Stream = await this.s3.getObject(this.params).createReadStream();
        return s3Stream
    }


  async  copyObject(){
       const copyObject= await this. s3.copyObject({
            Bucket:this.Bucket,
            CopySource:this.Bucket+'/'+this.record.s3.object.key,
            Key:this.record.s3.object.key.replace("uploaded","parsed")
          }).promise()
          return copyObject
    }
    
    async deleteObject(){
     const deleteobject= await  this.s3.deleteObject(this.params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
          })
          return deleteobject
    }
}

<<<<<<< HEAD
module.exports=ImportFileHAndler
=======
module.exports=ImportFileHAndler
>>>>>>> d1700ba302807905038ffebab90817901ff29931
