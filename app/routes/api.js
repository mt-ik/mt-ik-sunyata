/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userController = require('./../controller/user')

// const routers = router
//   .get('/user/getUserInfo', userInfoController.getUserInfo)
//   .post('/user/signIn', userInfoController.signIn)
//   .post('/user/signUp', userInfoController.signUp)

routers = router
.get('/user/getUserInfo', userController.getUserInfo)
.get('/user/register', userController.register)

module.exports = routers
