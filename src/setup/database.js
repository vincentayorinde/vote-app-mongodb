const MongoDb = require('mongodb')
const Config = require('../config')

module.exports = async () =>{
    const client = new MongoDb.MongoClient(Config.databaseUri, {
        useUnifiedTopology: true
    })

    await client.connect()

    return client.db()
}