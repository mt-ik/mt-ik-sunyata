/**
 * restful admin 子路由
 */

const router = require('koa-router')()
const adminController = require('../controller/admin')
console.log(adminController)

router.get('/register', adminController.register)
 

module.exports = router