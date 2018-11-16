const { selectAllUser } = require("../../db/curd/user");
class Home {
    constructor() {
        this.getData = this.getData.bind(this)
    }
    async getHome(ctx, next) {
        ctx.body = "hello koa2";
    }
    async postHome(ctx, next) {
        ctx.body = 'POST KOA~~~~~~~~~~~~'
    }

    async getData(ctx, next) {
        let dataList = await selectAllUser()
        ctx.body = dataList
    }

}

module.exports = new Home()