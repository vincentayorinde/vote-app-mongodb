const redis = require('redis')

module.exports = () => {
    return redis.createClient({
        host: 'redis-19124.c10.us-east-1-4.ec2.cloud.redislabs.com',
        password: 'GsAGZtO876ycJFNbrALcfy74NyI1MpS4',
        port: 19124
    })
}