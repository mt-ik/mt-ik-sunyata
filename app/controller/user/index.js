const AdminModel = require('../../models/admin')

class User {
    constructor() {}
    async getUserInfo(ctx, next) {
        // 当GET请求时候返回表单页面
        let html = `
            <h1>koa2 request post demo</h1>
            <form method="POST" action="/">
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
    async test(req, res, next) {
        console.log('1111111')
        let postData = req.request.body
        res.body = postData
    }
    async register(req, res, next) {
        try {
            const admin = await AdminModel.findOne({ user_name })
            if (admin) {
                console.log('该用户已存在')
                res.send({
                    status: 0,
                    type: 'USER_HAS_EXIST',
                    message: '该用户已经存在',
                })
            } else {
                const adminTip = status == 1 ? '管理员' : '超级管理员'
                const admin_id = await this.getId('admin_id');
                const newpassword = this.encryption(password);
                const newAdmin = {
                    user_name, 
                    password: newpassword, 
                    id: admin_id,
                    create_time: dtime().format('YYYY-MM-DD'),
                    admin: adminTip,
                    status,
                }
                await AdminModel.create(newAdmin)
                req.session.admin_id = admin_id;
                res.send({
                    status: 1,
                    message: '注册管理员成功',
                })
            }
        } catch (e) {
            console.log('注册管理员失败', err);
            res.send({
                status: 0,
                type: 'REGISTER_ADMIN_FAILED',
                message: '注册管理员失败',
            })
        }
    }
    encryption(password){
        const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
        return newpassword
    }
}

module.exports = new User()