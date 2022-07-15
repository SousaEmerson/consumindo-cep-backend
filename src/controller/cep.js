const service = require('../service/cep')

async function viaCep(req, res) {
	const { cep } = req.params

	const result = await service.getData(cep)
	return res.send(result)
}

module.exports = { viaCep }