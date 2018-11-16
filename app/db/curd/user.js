const { query } = require("./mysql");

const selectAllUser = async () => {
    let sql = 'SELECT * FROM USER'
    let dataList = await query(sql)
    return dataList
}

const selectUser = async () => {
    let sql = "select * from USER where USER.email = '18518165912@163.com' and USER.password = '5201314'"
    let dataUser = await query(sql)
    return dataUser
}

module.exports = {
    selectUser,
    selectAllUser
}