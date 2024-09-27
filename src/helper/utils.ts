import fsp from "node:fs/promises";
import fs from "node:fs";

export const createDirectory = async (dirName: string) => {

    const dir = `./${dirName}`;

    // Check to see if a directory exists
    if (!fs.existsSync(dir)) {
        console.log('Directory does not exist.')
        process.exit(1);
    }

    fsp.mkdir(dir, { recursive: true });
};

export const toSnakeCase = (str: string) => {
	return str
	  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
	  .map((x: string) => x.toLowerCase())
	  .join('_');
};

export const toCamelCase = (str: string) => {
	return str
        .split(/[^a-zA-Z0-9]+/) // Split the string by non-alphanumeric characters
        .filter((word: string) => word.length > 0) // Remove empty strings
        .map((word: string, index: number) => {
            word = word.toLowerCase();
            if (index === 0) {
                // First word should be lowercase
                return word;
            }
            // Capitalize the first letter of subsequent words
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
};

export const toKebabCase = (str: string) => {
	return str
        .split(/[^a-zA-Z0-9]+/) // Split the string by non-alphanumeric characters
        .filter((word: string) => word.length > 0) // Remove empty strings
        .map((word: string) => word.toLowerCase()) // Convert all words to lowercase
        .join('-'); // Join words with hyphens
};

export const toPascalCase = (str: string) => {

	return str
        .split(/[^a-zA-Z0-9]+/) // Split the string by non-alphanumeric characters
        .filter((word: string) => word.length > 0) // Remove empty strings
        .map((word: string) => {
            word = word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('') ?? '';
};

// declare global {
//     interface String {
//         toCamelCase(): string;
//         toKebabCase(): string;
//         toPascalCase(): string;
// 		toSnakeCase(): string;
//     }
// }

// String.prototype.toCamelCase = toCamelCase;
// String.prototype.toCamelCase = toCamelCase;
// String.prototype.toPascalCase = toPascalCase;
// String.prototype.toSnakeCase = toSnakeCase;


