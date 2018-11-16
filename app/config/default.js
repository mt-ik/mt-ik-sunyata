const dbPool = require('./db')
module.exports = {
    dbPool,
    port: 3000,
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