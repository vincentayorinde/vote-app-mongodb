require('dotenv').config()

module.exports = {
    databaseUri: process.env.DATABASE_URI,
    port: process.env.PORT,
    redisConnectionUri: process.env.REDIS_CONNECTION_URL,
    redisPassword: process.env.REDIS_PASSWORD,
    redisPort: process.env.REDIS_PORT
}
