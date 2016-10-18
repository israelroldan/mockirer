'use strict';

module.exports = (answers, inquirer) => {
	const answersTypeOf = typeof answers
	
	if (answersTypeOf !== 'object') {
		throw new TypeError(`The answers should be a object, ${answersTypeOf} given.`)
	}

	inquirer.prompt = prompts => {
		[].concat(prompts).forEach(prompt => {
			const hasAwnserForQuestion = (prompt.name in answers)
			const hasDefaultAwnser = (typeof prompt.default !== 'undefined')

			if (! hasAwnserForQuestion && hasDefaultAwnser) {
				answers[prompt.name] = prompt.default;
			}
		})

		return new Promise((resolve, reject) => {
			resolve(answers)
		})
	}
}