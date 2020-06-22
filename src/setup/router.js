const Router = require('express').Router
const createPolls = require('../handlers/create-polls')
const createPollsValidator = require('../validators/create-polls')
const createVoteValidator = require('../validators/create-vote')
const createVote = require('../handlers/create-vote')
const getPoll = require('../handlers/get-poll')


module.exports = (app, db, redisDb) => {
    const router = new Router()

    router.post('/polls', createPollsValidator, createPolls(db))
    router.put('/polls/:poll', createVoteValidator, createVote(db, redisDb))
    router.get('/polls/:poll', getPoll(db))

    app.use(router)
}