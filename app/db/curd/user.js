const { query } = require("./mysql");

const selectAllUser = async () => {
    let sql = 'SELECT * FROM USER'
    let dataList = await query(sql)
    return dataList
}

module.exports = {
    selectAllUser
}