const userService = require('../../service/user/user')
const userCode = require('../../code/user')
const resultUtil = require('../../util/result')
class User {
    constructor() {
        this.getAllUser = this.getAllUser.bind(this)
    }
    async getUser(ctx, next) {
        let userResult = await userService.getUser(ctx.query)
        let result = resultUtil()
        if ( userResult && ctx.query.userEmail === userResult.email ) {
            result.success = true
            result.data = userResult
        } else {
            result.code = -1
            result.success = false
            result.msg = 'FAIL_USER_NO_EXIST',
            result.message = userCode.FAIL_USER_NO_EXIST
        }
        ctx.body = result
    }
    async getAllUser(ctx, next) {
        let userResult = await userService.getAllUser()
        let result = resultUtil()
        if (userResult) {
            result.data = userResult
        } else {
            result.code = -1
            result.data = null
            result.message = '失败'
            result.msg = 'fail'
            result.success = false  
        }
        ctx.body = result
    }
    /**
     * 登录操作
     * @param  {obejct} ctx 上下文对象
     */
    async signIn( ctx ) {
        let formData = ctx.query//ctx.request.body
        let result = resultUtil()

        let userResult = await userService.signIn( formData )

        if ( userResult ) {
            if ( formData.userEmail === userResult.email ) {
                result.success = true
                result.data = userResult
            } else {
                result.code = -1
                result.msg = 'FAIL_USER_NAME_OR_PASSWORD_ERROR'
                result.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
            }
        } else {
            result.code = -1
            result.msg = 'FAIL_USER_NO_EXIST',
            result.message = userCode.FAIL_USER_NO_EXIST
        }
        debugger

        if ( formData.source === 'form' && result.success === true ) {
            let session = ctx.session
            session.isLogin = true
            session.userEmail = userResult.email
            session.phone = userResult.phone_part + userResult.phone
            session.userId = userResult.id
            debugger
            ctx.render('admin')
            // ctx.redirect('/admin')
        } else {
            ctx.body = result
        }
    }

    /**
     * 注册操作
     * @param   {obejct} ctx 上下文对象
     */
    async signUp( ctx ) {
        let formData = ctx.request.body
        let result = resultUtil()

        let validateResult = userService.validatorSignUp( formData )

        if ( validateResult.success === false ) {
            result = validateResult
            ctx.body = result
            return
        }

        let existOne  = await userService.getExistOne(formData)

        if ( existOne  ) {
            if ( existOne .name === formData.userName ) {
                result.message = userCode.FAIL_USER_NAME_IS_EXIST
                ctx.body = result
                return
            }
            if ( existOne .email === formData.email ) {
                result.message = userCode.FAIL_EMAIL_IS_EXIST
                ctx.body = result
                return
            }
        }

        let userResult = await userService.create({
            email: formData.email,
            password: formData.password,
            name: formData.userName,
            create_time: new Date().getTime(),
            level: 1,
        })

        if ( userResult && userResult.insertId * 1 > 0) {
            result.success = true
        } else {
            result.message = userCode.ERROR_SYS
        }
        ctx.body = result
    }
}

module.exports = new User()