/**
 * 整合所有子路由
 */

const Router = require('koa-router')
const router = new Router()

const home = require('./home')
const user = require('./user')
const admin = require('./admin')
// const api = require('./api')
const error = require('./error')

router.use('/', home.routes(), home.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
// router.use('/api', api.routes(), api.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
// router.use('/error', error.routes(), error.allowedMethods())
module.exports = router