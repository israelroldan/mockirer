'use strict';

// should thrown exception when try to mock with invalid answer
{
	const assert = require('assert');
	const inquirer = require('inquirer');
	const mockirer = require('./');

	assert.throws(() => {
		mockirer(true, inquirer)
	}, TypeError, 'The answers should be a object, boolean given.');
	
	assert.throws(() => {
		mockirer(undefined, inquirer)
	}, TypeError, 'The answers should be a object, undefined given');

	assert.throws(() => {
		mockirer(123, inquirer)
	}, TypeError, 'The answers should be a object, integer given');
}

// should be possible to mock answer
{
	const inquirer = require('inquirer');
	const mockirer = require('./');

	mockirer({
		name: 'Cauê'
	}, inquirer);

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