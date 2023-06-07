import { input } from '@inquirer/prompts';

export const getProjectName = async () => {

    const answer = await input({ message: 'Enter your name' });
    return answer
};