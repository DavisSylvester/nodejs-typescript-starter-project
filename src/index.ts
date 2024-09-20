#!/usr/bin/env node
import chalkAnimation from 'chalk-animation';
import { parseArgs } from './helper/args-helper.js';
import { dependencyInstaller } from "./helper/depInstaller.mjs";
import { getProjectName } from './prompts/menu-prompts.js';
import { NodeJsLibrary } from './projects/NodeJsLibrary.js';
import { cloneGitRepo } from './helper/clone.js';


// export const add = (a: number, b: number) => {

//     const result = a + b;
//     return result;
// };


// const answer = add(5, 10);
// console.log('Answer 1: ', answer);


const templateRepo = "https://github.com/DavisSylvester/project-template-repo.git"

await cloneGitRepo(templateRepo)
//
// const result = await getProjectName();
const n = new NodeJsLibrary();
const ran = (await new NodeJsLibrary().createProject()).addTestingFramework();




// libraries.forEach(async (libary) => {
//     const rainbow = chalkAnimation.rainbow('Installing NPM dev dependency...');

//     await dependencyInstaller(libary, true);

//     rainbow.stop();
// });
