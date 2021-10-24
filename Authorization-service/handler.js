
require('dotenv').config()
const Buffer = require('buffer/').Buffer

module.exports.basicAuthorizer = async (event, etx, call) => {
  const NAME = process.env.NAME
  const PASSWORD = process.env.TEST_PASSWORD
  let effect = "Deny"


  console.log(event)
  const coddeddata = event.authorizationToken
  console.log(typeof coddeddata)
  console.log(coddeddata)

  const buff = await Buffer.from(coddeddata, "base64")



  const plaintext = await buff.toString("utf-8").split(":")
  console.log(plaintext)

  const name = plaintext[0]
  const password = plaintext[1]






  if (name == NAME && password == PASSWORD) {
    console.log("yes esaedasasda")
    effect = "Allow"
  }









  const y = {

    // "principalId": "user",
    "policyDocument": {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Action": "execute-api:Invoke",
          "Effect": effect,
          "Resource": "*"
        }
      ]
    }

  }


  call(null, y)
}