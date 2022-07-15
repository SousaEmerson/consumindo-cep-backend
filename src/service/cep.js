const axios = require('axios')

async function getData(cep) {
	const { data } = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)
	const address = {
		logradouro: data.logradouro,
		bairro: data.bairro,
		cidade: data.localidade,
		uf: data.uf
	}
	console.log(address)
	return address
}

module.exports = { getData }