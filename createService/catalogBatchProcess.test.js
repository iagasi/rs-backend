<<<<<<< HEAD
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
=======
const { catalogBatchProcess } = require("./catalogBatchProcess")




describe("functio takes object and mapes it",()=>{

    const event={Records:[
      
          { body:'{"title":"Samsung","description":"  Samsung laptop","price":"1800","image":"img-src","amount":"55"}'}
       
    ]

    }
    test("returns object",async()=>{
const res=await catalogBatchProcess(event)

    expect(res).toBeDefined()
    expect(typeof res).toBe("object")
    })
})
>>>>>>> d1700ba302807905038ffebab90817901ff29931
