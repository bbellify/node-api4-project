const users = require('../data/users')

module.exports = {
    getUsers,
}


function getUsers() {
    return users
}