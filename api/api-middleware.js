
function validateRegister(req, res, next) {

}

function validateLogin(req, res, next) {

}

function errorHandling(err, req, res, next) {
    res.status(err.status || 500).json({
        message: `Something went wrong: ${err.message}`,
        stack: err.stack
    })
}

module.exports = {
    validateRegister,
    validateLogin,
    errorHandling
}