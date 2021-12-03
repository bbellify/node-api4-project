const express = require('express')
const cors = require('cors')

const Users = require('./api-model')

const {
    validateUsernamePassword,
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
server.post('/api/register', validateUsernamePassword, (req, res, next) => {
    const newUser = Users.registerUser(req.body.user)
    if (!newUser) {
        next({ message: 'registration failed - please try again'})
    } else {
        res.status(201).json(newUser)
    }
})

// logs user in
server.post('/api/login', validateUsernamePassword, (req, res, next) => {
    const isLoggedIn = Users.login(req.body.user)
    if (!isLoggedIn) {
        next({ message: 'incorrect username or password'})
    } else {
        res.json({
            message: `Welcome, ${isLoggedIn.username}!`
        })
    }
})

server.get('*', (req, res) => {
    res.json({
        message: 'api live'
    })
})

server.use(errorHandling)

module.exports = server