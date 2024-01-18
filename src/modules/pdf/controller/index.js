const schema = require('../schema/schema')
const { BAD_REQUEST, SUCCESS, OK, INTERNAL_SERVER_ERROR } = require('../../../common/constants')
const { getTemplate } = require('../../../utils/services/template')
const { bindingData, createPdf } = require('../service/index')

async function generatesPDF(req, res) {
    try {
        const { body } = req
        const validation = schema.validate(body, { abortEarly: false })

        if(validation?.error?.details?.length > 0) {
            const e = new Error()
            const errors = validation?.error?.details?.map((error) => `${error} `, [])
            e.message =  errors;
            e.status = BAD_REQUEST
        }
        
        const { template, data } = body
        const file = await getTemplate(template)
        const bindedTemplate = await bindingData(file, data)
        const base64 = await createPdf(bindedTemplate);
        return res.status(SUCCESS).json({ data: { document: base64 }, message: OK })
    } catch (e) {
        return res.status(e.status || INTERNAL_SERVER_ERROR).json({ message: e.message })
    }    
}


module.exports = {
    generatesPDF
}