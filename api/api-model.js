let users = require('../data/users')

module.exports = {
    getUsers,
    registerUser,
}


function getUsers() {
    return users
}

function registerUser(newUser) {
    users = [...users, newUser]
    return newUser
}