const isApiGatewayResponse=(response)=>{
const{body,headers,statusCode}=response
if(!body||!headers||!statusCode){return false}
if(typeof body!=="string"){return false}
if(!iscorrectHeaders(headers)){return false}

console.log(body)
return true
}


const iscorrectHeaders=headers=>{
    if(headers['Content-Type']!=="application/json")return false
    if(headers['Access-Control-Allow-Methods']!=="OPTIONS,POST,GET")return false
    if(headers['Access-Control-Allow-Origin']!=="*")return false
    return true
}
module.exports={isApiGatewayResponse,iscorrectHeaders}