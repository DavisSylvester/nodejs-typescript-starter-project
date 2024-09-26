import { checkbox, input, rawlist, select } from '@inquirer/prompts';
import { C_SHARP_PROJECT_TYPES, NPM_REGISTRY_HOST, NPM_REGISTRY_TYPE, PROGRAMMING_LANGUAGES_TYPES, ProgrammingLanguageType, PROJECT_TYPES } from '../types/ProjectTypes.js';
import { parseArgs } from '../helper/args-helper.js';


export const getProjectName = async () => {

	const cliValues = parseArgs(process.argv, ['--new'], true);

	let result;

	if ((cliValues as Map<string, string>).has('--new')) {
		result = (cliValues as Map<string, string>).get('--new') as string;
	}

	if (!result) {
		result = await input({ message: 'Project Name' });
	}
	
	return result;
};

export const includeJestTesting = async () => {

	const answer = await rawlist({
		message: 'Include Testing Framework',
		choices: [
			{ name: 'Yes', value: 'true' },
			{ name: 'No', value: 'false' },
		]
	});
	return convertToBoolean(answer);
};

export const selectProjectType = async (language: ProgrammingLanguageType) => {

	const nodeProjectTypes = [
		{
			name: 'Library',
			value: PROJECT_TYPES.LIBRARY,
			description: 'Create a Node JS Library',
		},
		{
			name: 'Application',
			value: PROJECT_TYPES.APPLICATION,
			description: 'Create a Node JS Application',
		},
		{
			name: 'CDK',
			value: PROJECT_TYPES.CDK,
			description: 'Create a CDK Application with Bishop',
		},
		{
			name: 'API',
			value: PROJECT_TYPES.API,
			description: 'Create a Node JS API',
		},
	];

	const csharpProjectTypes = [
		{
			name: "Gateway - Auth0 - Lambda - Lambda",
			value: C_SHARP_PROJECT_TYPES['IDB Gateway - Auth0 - CircleCi - Lambda'],
			description: 'Gateway - Auth0 - Lambda - Lambda',
		},
		{
			name: 'Library',
			value: C_SHARP_PROJECT_TYPES['C# LIBRARY'],
			description: 'Create a Library',
		},
	];

	const choices = [];

	switch (language) {
		case 'c-sharp':
			choices.push(...csharpProjectTypes);
			break;

		case 'nodejs-typescript':
			choices.push(...nodeProjectTypes);
			break;

		default:
			break;
	}



	const answer = await select({
		message: 'Project type',
		choices
	});

	const result = convertToProjectType(answer);
	return result;
};

export const libraryPublishRegistryMenu = async () => {

	const answer = await select({
		message: 'Which NPM Registry do you want to publish to?',
		choices: [
			{
				name: 'Github Registry',
				value: 'github',
				description: 'Publish Library to Github',
			},
			{
				name: 'NPM Registry',
				value: 'npmjs',
				description: 'Publish Library to NPM',
			},
		]
	});
	return (answer === NPM_REGISTRY_HOST.GITHUB) ? NPM_REGISTRY_HOST.GITHUB : NPM_REGISTRY_HOST.NPMJS;
};

export const publishLibraryToRegistryMenu = async () => {

	const answer = await rawlist({
		message: 'Will you publish to an NPM Registry?',
		choices: [
			{ name: 'Yes', value: 'true' },
			{ name: 'No', value: 'false' },
		]
	});
	return convertToBoolean(answer);
};

export const publishLibraryToPackageSecurity = async () => {

	const answer = await rawlist({
		message: 'Is your NPM Package Public or Private?',
		choices: [
			{ name: 'Public', value: 'public' },
			{ name: 'Private', value: 'private' },
		]
	});
	return convertToRegistryType(answer);
};

export const selectProgrammingLanguage = async () => {

	const answer = await select({
		message: 'Programming Language',
		choices: [
			{
				name: 'Node - Typescript',
				value: PROGRAMMING_LANGUAGES_TYPES['Node - Typescript'],
				description: 'Create a Node Typescript Project',
			},
			{
				name: 'C#',
				value: PROGRAMMING_LANGUAGES_TYPES['C#'],
				description: 'Create a C# Project',
			},
		]
	});

	// const result = convertToProjectType(answer);
	return answer;
};


const convertToProjectType = (answer: string) => {
	switch (answer) {
		case PROJECT_TYPES.LIBRARY:
			return PROJECT_TYPES.LIBRARY;

		case PROJECT_TYPES.API:
			return PROJECT_TYPES.API;

		case PROJECT_TYPES.APPLICATION:
			return PROJECT_TYPES.APPLICATION;

		case PROJECT_TYPES.CDK:
			return PROJECT_TYPES.CDK;
		default:
			return PROJECT_TYPES.LIBRARY;
	}
}

const convertToRegistryType = (answer: string) => {
	switch (answer) {
		case NPM_REGISTRY_TYPE.PRIVATE:
			return NPM_REGISTRY_TYPE.PRIVATE;

		case NPM_REGISTRY_TYPE.PUBLIC:
			return NPM_REGISTRY_TYPE.PUBLIC;

		default:
			return NPM_REGISTRY_TYPE.PUBLIC;
	}
}

const convertToBoolean = (answer: string) => {
	return answer === 'true' ? true : false;
}

const convertToProgrammingLanguage = (answer: string) => {
	switch (answer) {
		case PROJECT_TYPES.LIBRARY:
			return PROJECT_TYPES.LIBRARY;

		case PROJECT_TYPES.API:
			return PROJECT_TYPES.API;

		case PROJECT_TYPES.APPLICATION:
			return PROJECT_TYPES.APPLICATION;

		case PROJECT_TYPES.CDK:
			return PROJECT_TYPES.CDK;
		default:
			return PROJECT_TYPES.LIBRARY;
	}
}

