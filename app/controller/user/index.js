const { selectUser, selectAllUser } = require("../../db/curd/user");
class User {
    constructor() {
        this.getAllUser = this.getAllUser.bind(this)
    }
    async getUser(ctx, next) {
        let user = await selectUser()
        ctx.body = user
    }
    async getAllUser(ctx, next) {
        let dataList = await selectAllUser()
        ctx.body = dataList
    }

}

module.exports = new User()