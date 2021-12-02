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
server.post('/api/register', validateRegister, (req, res, next) => {
    const newUser = Users.registerUser(req.body.newUser)
    if (!newUser) {
        next({ message: 'registration failed - please try again'})
    } else {
        res.status(201).json(newUser)
    }
})

// logs user in
server.post('/api/login', (req, res) => {

})

server.use(errorHandling)

module.exports = server