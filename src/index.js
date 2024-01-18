const express = require('express')
const log = require('npmlog')
const cors = require('cors')
const swaggerUi = require("swagger-ui-express")
const swaggerDoc = require('./docs/swagger.json')
require('dotenv').config()
const { env: { APP_PORT } } = process
const routes = require('./routes')

log.info('Starting PDF Generator API ...', 'Bootstraping')

const app = express()
const port = APP_PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api/v1', routes)
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc, { explorer: true }),
  );

log.info(`Swagger Docs loaded at http://localhost:${port}/docs`, 'Bootstraping')


app.listen(port, async () => {
    log.info(`PDF Generator API listening at http://localhost:${port}`, 'Bootstraping')
})