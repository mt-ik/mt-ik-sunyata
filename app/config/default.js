const db = require('./db')
module.exports = {
    dbPool: db.pool,
    database: db.database,
    port: 3000,
    session: {
        name: 'SID',
        secret: 'SID',
    },
    cookie: {
        maxAge: 365 * 24 * 60 * 60 * 1000, // cookie有效时长
        expires: '',  // cookie失效时间
        path: '', // 写cookie所在的路径
        domain: '', // 写cookie所在的域名
        httpOnly: '', // 是否只用于http请求中获取
        overwrite: '',  // 是否允许重写
        secure: '',
	    sameSite: '',
	    signed: '',
    }
}