const cors = require('cors')
const morgan = require('morgan')
const BodyParser = require('body-parser')

module.exports = (app) => {
    app.use(BodyParser.json())
    app.use(morgan('dev'))
    app.use(cors())
}