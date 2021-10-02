class ImportFileHAndler{
    
       async getObject(){
          const  s3Stream="Defined"
            console.log("Get Object form mock testing")
            return Promise.resolve(s3Stream) 
        }
    
    
      async  copyObject(){
           const copyObject= "Defined"
              return Promise.resolve(copyObject)
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