/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userController = require('./../controller/user')

routers = router
.post('/api/getToken', userController.getToken)

module.exports = routers
