const {Router} = require('express')
const controller = require('./src/controller/cep')

const router = Router()

router.get('/cep/:cep', controller.viaCep)

module.exports = router