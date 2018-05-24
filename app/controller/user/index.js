const UserModel = require('../../models/user')
const crypto = require('crypto')
const dtime = require('time-formater'
)
class User {
    constructor() {
        this.encryption = this.encryption.bind(this)
        this.register = this.register.bind(this)
    }
    async getUserInfo(ctx, next) {
        debugger
        // 当GET请求时候返回表单页面
        let html = `
            <h1>koa2 request post demo</h1>
            <form method="get" action="/api/user/register">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>nickName</p>
                <input name="nickName" /><br/>
                <p>email</p>
                <input name="email" /><br/>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body = html
    }
    async register(ctx, next) {
        console.log(this, 'this')
        try {
            const userName = '道之'
            const status = 0
            const user = await UserModel.findOne({ userName })
            console.log(user)
            if (user) {
                console.log('该用户已存在')
                ctx.body = {
                    status: 0,
                    type: 'USER_HAS_EXIST',
                    message: '该用户已经存在',
                }
            } else {
                const userTip = status == 1 ? '管理员' : '超级管理员'
                // const uid = await this.getId('uid')
                const uid = 271040422
                const password = 'xgy5201314'
                const passwordMD5 = this.encryption(password);
                const newUser = {
                    userName, 
                    password: passwordMD5, 
                    uid,
                    createTime: dtime().format('YYYY-MM-DD'),
                    admin: userTip,
                    status,
                }
                await UserModel.create(newUser)
                // req.session.uid = uid
                ctx.body = {
                    status: 1,
                    message: '注册管理员成功',
                }
            }
        } catch (e) {
            console.log('注册管理员失败', e)
            ctx.body ={
                status: 0,
                type: 'REGISTER_ADMIN_FAILED',
                message: '注册管理员失败',
            }
        }
    }
    async testPost(res, req, err) {
        console.log('111111')
    }
    encryption(password){
        const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
        return newpassword
    }
}

module.exports = new User()