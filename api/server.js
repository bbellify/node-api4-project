const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())



// gets all users
server.get('/api/users', (req, res) => {

})

// creates a new user
server.post('/api/register', (req, res) => {

})

// logs user in
server.post('/api/login', (req, res) => {
    
})

module.exports = server