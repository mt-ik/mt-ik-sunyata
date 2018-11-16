const mysql = require('mysql')

module.exports = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "5201314",
    database: "mt_ik_sunyata"
    // port: '3306'
})
