import { checkbox, input, rawlist, select } from '@inquirer/prompts';
import { PROJECT_TYPES } from '../types/ProjectTypes.js';
import { parseArgs } from '../helper/args-helper.js';


export const getProjectName = async () => {

	const cliValues = parseArgs(process.argv, ['--new'], true);

	let result = '';

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
		message: 'Add Jest Testing',
		choices: [
			{ name: 'Yes', value: 'true' },
			{ name: 'No', value: 'false' },
		]
	});
	return answer;
};

export const selectProjectType = async () => {

	const answer = await select({
		message: 'Project type',
		choices: [
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

		]
	});

	const result = convertToProjectType(answer);
	return result;
};

export const libraryPublishLocation = async () => {

	const answer = await select({
		message: 'NPM Library Publish',
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
	return answer
};

export const publishLibraryToRegistry = async () => {

	const answer = await checkbox({
		message: 'NPM Library Publish',
		choices: [
			{ name: 'Yes', value: 'true' },
			{ name: 'No', value: 'false' },
		]
	});
	return answer
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

