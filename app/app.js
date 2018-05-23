const Koa = require('koa')
const path = require('path')
// const static = require('koa-static')
// const bodyParser = require('koa-bodyparser')
// const session = require('koa-session-minimal')
const config = require('config-lite')(__dirname)
const chalk = require('chalk')
// const Boom = require('boom')
// const db = require('./mongodb/db')

// const router = require('./routes/index')
var Router = require('koa-router');

const app = new Koa()
var router = new Router()
// const loggerAsync = require('./middleware/logger-async')
// app.use(loggerAsync())
app.use(bodyParser())

router.get('/', (ctx, next) => {
		debugger
		ctx.body = 'Hello World!';
	})
	.post('/users', (res, req, next) => {
		debugger
	})
// 初始化路由中间件
app.use(router.routes());
app.use(router.allowedMethods())

app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});
