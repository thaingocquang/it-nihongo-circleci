const register = require('./register.controller')
const login = require('./login.controller')
const changePassword = require('./change_password.controller')

module.exports = {
    register: register,
    login: login,
    changePassword: changePassword,
}
