const express = require('express')
const cors = require('cors')

const Users = require('./api-model')

const {
    validateRegister,
    validateLogin,
    errorHandling,
} = require('./api-middleware')

const server = express()

server.use(express.json())
server.use(cors())



// gets all users
server.get('/api/users', (req, res, next) => {
    const users = Users.getUsers()
    if (!users) {
        next(({ message: 'failure fetching users'}))    
    } else {
        res.json(users)
    }
})
// creates a new user
server.post('/api/register', (req, res) => {

})

// logs user in
server.post('/api/login', (req, res) => {

})

server.use(errorHandling)

module.exports = server