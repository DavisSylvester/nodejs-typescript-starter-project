import chalkAnimation from 'chalk-animation';

import { dependencyInstaller } from "./depInstaller.mjs";
import { parseArgs } from './helper/args-helper.js';


export const add = (a: number, b: number) => {

    const result = a + b;
    return result;
};


const answer = add(5, 10);
console.log('Answer 1: ', answer);

const devLibraries = ['typescript', 'jest', 'ts-jest', 'nodemon', 'ts-node', '@types/jest', '@types/node'];

const libraries = ['@sylvesterllc/aws-constructs'];

libraries.forEach(async (libary) => {
    const rainbow = chalkAnimation.rainbow('Installing NPM dev dependency...');

    await dependencyInstaller(libary, true);

    rainbow.stop();
});


console.log('flags:', parseArgs(process.argv, ['--new', '--type', '--help'], true));
