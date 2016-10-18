'use strict';

module.exports = answers => {
	const answersTypeOf = typeof answers
	
	if (answersTypeOf !== 'object') {
		throw new TypeError(`The answers should be a object, ${answersTypeOf} given.`)
	}

	let _inquirer

	if (typeof inquirer !== 'undefined') {
		_inquirer = inquirer
	} else {
		_inquirer = require('inquirer')
	}


	_inquirer.prompt = prompts => {
		[].concat(prompts).forEach(prompt => {
			const hasAwnserForQuestion = (prompt.name in answers)
			const hasDefaultAwnser = (typeof prompt.default !== 'undefined')

			if (! hasAwnserForQuestion && hasDefaultAwnser) {
				answers[prompt.name] = prompt.default;
			}
		})

		return {
			then: callback => {
				callback(answers)
			}
		}
	}
}