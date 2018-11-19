const result = () => {
    let o = Object.create(null)
    o.success = true
    o.msg = 'success'
    o.message = '成功'
    o.data = null
    o.code = 0
    return o
}

module.exports = result