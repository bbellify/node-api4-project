
function validateRegister(req, res, next) {
    const { username, password } = req.body
    if (!username || !password) {
        next({ message: `username and password are required`})
    } else {
        req.body.newUser = { username: req.body.username, password: req.body.password }
        next()
    }

}

function validateLogin(req, res, next) {

}

function errorHandling(err, req, res, next) {
    res.status(err.status || 500).json({
        message: `error: ${err.message}`,
        stack: err.stack
    })
}

module.exports = {
    validateRegister,
    validateLogin,
    errorHandling
}