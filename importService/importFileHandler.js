const fs=require("fs")

class ImportFileHAndler{
constructor(s3,params,record,Bucket){
    this.params=params
    this.record=record
    this.s3=s3
    this.Bucket=Bucket
}


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

module.exports=ImportFileHAndler