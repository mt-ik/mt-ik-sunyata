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
.post('/user/getUserInfo', userController.getUserInfo)
.post('/user/test', userController.test)

module.exports = routers
