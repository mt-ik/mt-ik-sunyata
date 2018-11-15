class Home {
    async getHome(ctx, next) {
        console.log('~~~~~~~~~~')
        ctx.body = "hello koa2";
    }
    async postHome(ctx, next) {
        ctx.body = 'POST KOA~~~~~~~~~~~~'
    }
}

module.exports = new Home()