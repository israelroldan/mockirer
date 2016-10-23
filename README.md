# mockirer [![Build Status](https://travis-ci.org/ceasbz/mockirer.svg?branch=master)](https://travis-ci.org/ceasbz/mockirer) [![Dependency Status](https://david-dm.org/ceasbz/mockirer.svg?style=flat-square)](https://david-dm.org/ceasbz/mockirer) [![Npm Package Version](https://img.shields.io/npm/v/mockirer.svg?style=flat-square)](https://www.npmjs.org/package/mockirer) [![Coverage Status](https://coveralls.io/repos/github/ceasbz/mockirer/badge.svg?branch=master)](https://coveralls.io/github/ceasbz/mockirer?branch=master)

> Mock the answers of [inquirer](https://github.com/SBoudrias/Inquirer.js) prompt questions.

## Install
```bash
npm install mockirer --save-dev
```

## Usage
```js
const mockirer = require('mockirer');
const inquirer = require('inquirer');

mockirer(inquirer, {
	name: 'Cauê'
});

inquirer.prompt([
	{
		type: 'input',
		name: 'name',
		message: 'What is your name?',
	}
]).then(answers => {
	console.log(answers.name); // Cauê
})
```

## License

MIT © [Cauê Alves](https://twitter.com/ceasbz)
