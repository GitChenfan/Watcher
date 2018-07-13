const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb+srv://node-shop-admin:node-shop-admin@node-rest-shop-gzsak.mongodb.net/test?retryWrites=true'

const dbName = 'rest-shop'

const dbCol = 'Products'

MongoClient.connect(url, { useNewUrlParser: true })
  .then((client) => {
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    const collection = db.collection(dbCol)
    // using .next() only returns the next document once
    collection.watch().on('change', data => console.log(data))
  })
  .catch((err) => {
    console.log(err)
  })
