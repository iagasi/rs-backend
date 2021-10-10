const { catalogBatchProcess } = require("./catalogBatchProcess")




describe("functio takes object and mapes it",()=>{

    const event={Records:[
      
          { body:'{"title":"Samsung","description":"  Samsung laptop","price":"1800","image":"img-src","amount":"55"}'}
       
    ]

    }
    test("gstslog",async()=>{
const res=await catalogBatchProcess(event)

    expect(res).toBeDefined()
    expect(typeof res).toBe("object")
    })
})