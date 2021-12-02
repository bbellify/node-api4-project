const express = require('express')
const cors = require('cors')

const {
    validateRegister,
    validateLogin,
    errorHandling,
} = require('./api-middleware')

const server = express()

server.use(express.json())
server.use(cors())



// gets all users
server.get('/api/users', (req, res) => {
    res.json([
        {
            user: 'tom',
            id: 1
        }, {
            user: 'joe',
            id:2
        }
    ])
})

// creates a new user
server.post('/api/register', (req, res) => {

})

// logs user in
server.post('/api/login', (req, res) => {

})

server.use(errorHandling)

module.exports = server