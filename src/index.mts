import chalkAnimation from 'chalk-animation';

import { parseArgs } from './helper/args-helper.js';
import { dependencyInstaller } from "./helper/depInstaller.mjs";
import { getProjectName } from './prompts/menu-prompts.js';


// export const add = (a: number, b: number) => {

//     const result = a + b;
//     return result;
// };


// const answer = add(5, 10);
// console.log('Answer 1: ', answer);




const result = await getProjectName();




// libraries.forEach(async (libary) => {
//     const rainbow = chalkAnimation.rainbow('Installing NPM dev dependency...');

//     await dependencyInstaller(libary, true);

//     rainbow.stop();
// });