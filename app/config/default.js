module.exports = {
    port: 3000,
    url: 'mongodb://127.0.0.1:27017/alipay',
    session: {
        name: 'SID',
        secret: 'SID',
        cookie: {
            httpOnly: true,
            secret: false,
            maxAge: 365 * 24 * 60 * 60 * 1000
        }
    }
}