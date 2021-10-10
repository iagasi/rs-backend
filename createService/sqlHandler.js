class SqlHandler {
    constructor(client) {
        this.client = client;

    }

    async connectToDatabase() {
        try {
            const status=await this.client.connect((err) => {
                if (err) { console.log(err) }
                else { console.log("connected") }
            })
        }
        catch (error) {
            console.log("error is---", error)
        }

    }
    async createTableIfNotExists() {

        await this.client.query(
            `
CREATE TABLE IF NOT exists 
products(
id  uuid primary key default uuid_generate_v4(),
title text,
description text ,
price int,
image text,
idendifier text

)


`


        )

        await this.client.query(
            `create table if not exists
            stocks(
           id uuid primary key   ,
           amount text,
           FOREIGN key (id) references products (id)
           )`
        )
    }

    async createProducts(title, description, price, image, amount) {
        const resultDatabase = await this.client.query(`insert into products(title,description,price,image)
values('${title}','${description}',${price},'${image}')   returning id  `)
        console.log(resultDatabase)
        const idForStocks = resultDatabase.rows[0].id

        console.log(resultDatabase)
        this.client.query(
            `insert into stocks(id,amount)values
  ('${idForStocks}',${amount} )`
        )

        console.log("data created")
    }
}

module.exports = SqlHandler