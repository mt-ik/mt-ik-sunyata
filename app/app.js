const Koa = require('koa')
const path = require('path')
// const static = require('koa-static')
const cors = require('koa2-cors');
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
app.use(cors({
	origin: function (ctx) {
		if (ctx.url === '/test') {
			return false;
		}
		return 'http://0.0.0.0:8891/';
	},
	exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
	maxAge: 5,
	credentials: true,
	allowMethods: ['GET', 'POST', 'DELETE'],
	allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
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
