const UserModel = require('../../models/user')
const crypto = require('crypto')
const formidable = require('koa-formidable')
const dtime = require('time-formater')

class User {
    constructor() {
        this.encryption = this.encryption.bind(this)
        this.register = this.register.bind(this)
    }
    async getUserInfo(ctx, next) {
        // 当GET请求时候返回表单页面
        let html = `
            <h1>koa2 request post demo</h1>
            <form method="post" action="/api/user/register">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>nickName</p>
                <input name="password" /><br/>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body = html
    }
    async register(ctx, next) {
        debugger
        const { userName, password, status = 1 } = ctx.request.body
        try {
            if (!userName) {
                throw new Error('用户名错误')
            } else if (!password) {
                throw new Error('密码错误')
            }
        } catch (err) {
            console.log(err.message, err);
            ctx.response.body = {
                status: 0,
                type: 'GET_ERROR_PARAM',
                message: err.message,
            }
            return
        }
        try {
            const user = await UserModel.findOne({ userName })
            if (user) {
                console.log('该用户已经存在')
                ctx.response.body = {
                    status: 0,
                    type: 'USER_HAS_EXIST',
                    message: '该用户已经存在'
                }
            } else {
                const admin = status == 1 ? '管理员' : '超级管理员'
                const uid = '271040422' //await this.getId('uid')
                const passwordMD5 = this.encryption(password)
                const newUser = {
                    userName,
                    password: passwordMD5,
                    uid,
                    createTime: dtime().format('YYYY-MM-DD HH:MM:SS'),
                    admin,
                    status
                }
                await UserModel.create(newUser)
                // ctx.session.uid = uid
                ctx.response.body = {
                    status: 1,
                    type: 'SUCESS',
                    message: '注册管理员成功'
                }
            }
        } catch (err) {
            console.log('注册管理员失败', err);
            ctx.response.body = {
                status: 0,
                type: 'REGISTER_ADMIN_FAILED',
                message: '注册管理员失败',
            }
        }
    }
	encryption(password){
		const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
		return newpassword
	}
	Md5(password){
		const md5 = crypto.createHash('md5');
		return md5.update(password).digest('base64');
	}
}

module.exports = new User()