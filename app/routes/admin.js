/**
 * restful admin 子路由
 */

const router = require('koa-router')()
const adminController = require('../controller/admin')

routers = router
    .get('/', adminController.indexPage)

module.exports = routers
