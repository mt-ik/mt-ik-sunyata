const fs = require('fs')

function render(page) {
    return new Promise((resolve, reject) => {
        let viewUrl = `../view/${page}`
        console.log(viewUrl)
        fs.readFile(viewUrl, 'binary', (err, data) => {
            console.log(err, data)
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = async (url) => {
    console.log(url)
    let view = '404.html'
    switch(url) {
        case '/': 
            view = 'index.html'
            break
        case '/index':
            view = 'index.html'
            break
        case '/todo':
            view = 'todo.html'
            break
        case '/404':
            view = '404.html'
            break
        default:
            break
    }
    let html = await render(view)
    return html
}