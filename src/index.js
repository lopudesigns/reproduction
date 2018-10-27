const testImport1 = require('./testImport1')
const testImport2 = require('./testImport2')
const test = require('./testImport3/test')

let exp = {
	testImport1,
	testImport2,
	test
}

module.exports = exp