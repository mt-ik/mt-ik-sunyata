/**
 * restful home 子路由
 */

const router = require('koa-router')()
const homeController = require('../controller/home')

routers = router
    .get('', homeController.getHome)

module.exports = routers
