/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userController = require('./../controller/user')

routers = router
.post('/user/getToken', userController.getToken)
.get('/user/getUserInfo', userController.getUserInfo)
.post('/user/register', userController.register)

module.exports = routers
