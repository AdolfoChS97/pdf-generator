const mustache = require('mustache')
const pdf = require('html-pdf')
const { INTERNAL_SERVER_ERROR } = require('../../../common/constants')

async function bindingData(template, data) {
    try {
        return mustache.render(template.toString(), data)
    } catch (e) {
        const error = new Error()
        error.message = e?.message || 'Error binding data'
        error.status = INTERNAL_SERVER_ERROR
        throw error;
    }
}

async function createPdf(html, format = 'Letter') {
    try {
        return new Promise((resolve, reject) => {
            pdf.create(html, { format: format }).toBuffer((err, buffer) => {
                if(err) reject(err)
                return resolve(buffer?.toString('base64'))
            })
        })
    } catch (e) {
        const error = new Error()
        error.message = e?.message || 'Error creating PDF'
        error.status = INTERNAL_SERVER_ERROR
        throw error;
    }
}

module.exports = {
    bindingData,
    createPdf
}