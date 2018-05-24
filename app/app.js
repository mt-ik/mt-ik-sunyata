const Koa = require('koa')
const path = require('path')
// const static = require('koa-static')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const config = require('config-lite')(__dirname)
const chalk = require('chalk')
// const Boom = require('boom')
const db = require('./mongodb/db')

const router = require('./routes/index')

const app = new Koa()
// const loggerAsync = require('./middleware/logger-async')
// app.use(loggerAsync())
app.use(logger())
app.use(bodyParser())

// 初始化路由中间件
app.use(router.routes());
app.use(router.allowedMethods())

app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});
