'use strict';

// should thrown exception when try to mock with invalid answer
{
	const assert = require('assert');
	const mockirer = require('./');

	assert.throws(() => {
		mockirer(true)
	}, TypeError, 'The answers should be a object, boolean given.');
	
	assert.throws(() => {
		mockirer()
	}, TypeError, 'The answers should be a object, undefined given');

	assert.throws(() => {
		mockirer(123)
	}, TypeError, 'The answers should be a object, integer given');
}

// should be possible to mock answer
{
	const inquirer = require('inquirer');
	const mockirer = require('./');

	mockirer({
		name: 'Cauê'
	});

	inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your name?',
		}
	]).then(answers => {
		console.assert(typeof answers.name === 'string');
		console.assert(answers.name === 'Cauê');
	})
}