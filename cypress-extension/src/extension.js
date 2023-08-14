const registerJsCommands = require('./register/js-commands')

function activate(context) {
	registerJsCommands(context)
}

module.exports = { activate }