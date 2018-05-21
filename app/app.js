const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const config = require('config-lite')(__dirname)
const chalk = require('chalk')
const db = require('./mongodb/db')

const router = require('./routes/index')


const app = new Koa()

const loggerAsync = require('./middleware/logger-async')
// 初始化路由中间件
router(app)
app.use(loggerAsync())
app.use(bodyParser())

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});
