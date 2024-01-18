const fs = require('fs')
const path = require('path')

async function getTemplate(templateName, extension = 'html') {
    try {
        return new Promise((resolve, reject) => {
            fs.readFile(path.resolve(__dirname, `../../../public/templates/${templateName}.${extension}`), 'utf8', (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        })
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = {
    getTemplate
}