const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //rotas da API

    const aplicationContentService = require('../api/aplicationContent/aplicationContentService')
    aplicationContentService.register(router, '/aplicationContent')
}