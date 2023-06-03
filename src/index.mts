import { dependencyInstaller } from "./depInstaller.mjs";

export const add = (a: number, b: number) => {

    const result = a + b;
    return result;
};


const answer = add(5, 10);
console.log('Answer 1: ', answer);

const devLibraries = ['typescript', 'jest', 'ts-jest', 'nodemon', 'ts-node', '@types/jest', '@types/node'];

const libraries = ['@sylvesterllc/aws-constructs'];

libraries.forEach(async (libary) => {
    await dependencyInstaller(libary, true);
});