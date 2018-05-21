/**
 * 整合所有子路由
 */
const admin = require('./admin')
// const api = require('./api')

module.exports = (app) => {
    // app.use('/', home.routes(), home.allowedMethods())
    app.use('/admin', admin.routes(), admin.allowedMethods())
    // app.use('/work', work.routes(), work.allowedMethods())
    // app.use('/error', error.routes(), error.allowedMethods())
}