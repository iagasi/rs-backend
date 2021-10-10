const Responses={
cors(data){
return{
    statusCode: 200,

    body: JSON.stringify(data) ,
    headers: {
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*' ,
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
}
}
}}

module.exports=Responses