const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const cors = require('koa2-cors');
const logger = require('koa-logger')
const convert = require('koa-convert')
const bodyParser = require('koa-bodyparser')
const jwt = require('jsonwebtoken')
const jwtKoa = require('koa-jwt')
const session = require('koa-session-minimal')
const mysqlSession = require('koa-mysql-session')
const jsonp = require('koa-jsonp')
const config = require('config-lite')(__dirname)
const chalk = require('chalk')
const router = require('./routes/index')
const secret = 'jwtAlipay'

const app = new Koa()

// jsonp跨域
app.use(jsonp())

// cors跨域
app.use(cors({
	origin: function (ctx) {
		if (ctx.url === '/test') {
			return false
		}
		return '*'
	},
	exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
	maxAge: 5,
	credentials: true,
	allowMethods: ['GET', 'POST', 'DELETE'],
	allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))


// app.use(jwtKoa({secret}).unless({
// 	path: [/^\/api\/user\/getToken/] //数组中的路径不需要通过jwt验证
// }))
  
  // 配置session中间件
  app.use(session({
	key: 'USER_SID',
	store: new mysqlSession(config.database),
	cookie: config.cookie
  }))
  

// 配置控制台日志中间件
app.use(convert(logger()))

// 配置ctx.body解析中间件
app.use(bodyParser())

// 配置静态资源加载中间件
app.use(convert(static(path.join( __dirname,  './static'))))

// 初始化路由中间件
app.use(router.routes()).use(router.allowedMethods())

// 监听启动端口
app.listen(config.port, () => {
	console.log(
		chalk.green(`The server is start at port ${config.port}`)
	)
});
