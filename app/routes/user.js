/**
 * restful user 子路由
 */

const router = require('koa-router')()
const userController = require('../controller/user')

routers = router
    .get('/getUser', userController.getUser)
    .get('/getAllUser', userController.getAllUser)

module.exports = routers
