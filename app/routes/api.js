/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('../controller/user-info')

router.get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
    .post('/user/signIn.json', userInfoController.signIn)
    .post('/user/signUp.json', userInfoController.signUp)

module.exports = router