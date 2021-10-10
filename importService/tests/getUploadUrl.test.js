
const { getUploadUrl } = require("../getUploadUrl")
const eventGenetator=require("./testUtilits/eventGenerator")
const validators=require("./testUtilits/validators")


describe('the Lambda creates upload url and returns it to requester',()=>{
    test('Response from lambda checking response types as Body,Headers',async()=>{
const event=eventGenetator({name:"Catalog.csv"})
        const res=await getUploadUrl(event)

        expect(res).toBeDefined()
        expect(validators.isApiGatewayResponse(res)).toBe(true)
    })

//     test("Getting upload url from s3 bucket",async()=>{
// const event=eventGenetator({name:"Catalog.csv"})
// const uploadurl=await getUploadUrl(event)
// expect
//     })
})