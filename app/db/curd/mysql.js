const pool = require("config-lite")(__dirname).dbPool

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) reject(err)
            connection.query(sql, values, (err, rows) => {
                if (err) reject(err)
                resolve(rows)
                connection.release()
            })
        })
    })
}

module.exports = { query }