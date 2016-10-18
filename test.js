'use strict';

// should thrown exception when try to mock with invalid parameters
{
	const assert = require('assert');
	const inquirer = require('inquirer');
	const mockirer = require('./');

	assert.throws(() => {
		mockirer(inquirer, true)
	}, TypeError, 'The answers should be a object, boolean given.');
	
	assert.throws(() => {
		mockirer(inquirer, undefined)
	}, TypeError, 'The answers should be a object, undefined given.');

	assert.throws(() => {
		mockirer(inquirer, 123)
	}, TypeError, 'The answers should be a object, integer given.');

	assert.throws(() => {
		mockirer(undefined, {
			name: 'Test'
		})
	}, TypeError, 'Must pass inquirer as dependency injection.');
}

// should be possible to mock answer
{
	const inquirer = require('inquirer');
	const mockirer = require('./');

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
		console.assert(typeof answers.name === 'string');
		console.assert(answers.name === 'Cauê');
	})
}