class Home {
    constructor() {}
    async getHome(ctx, next) {
        ctx.body = "hello koa2";
    }
    async postHome(ctx, next) {
        ctx.body = 'POST KOA~~~~~~~~~~~~'
    }

}

module.exports = new Home()