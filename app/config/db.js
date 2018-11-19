const mysql = require('mysql')
const database = {
    host: "127.0.0.1",
    user: "root",
    password: "5201314",
    database: "mt_ik_sunyata"
    // port: '3306'
}
module.exports = {
    database,
    pool: mysql.createPool(database)
}
