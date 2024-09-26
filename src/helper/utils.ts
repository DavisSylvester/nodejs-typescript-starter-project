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
	  .map(x => x.toLowerCase())
	  .join('_');
};

export const toCamelCase = (str: string) => {
	return str.replace(/([-_][a-z])/g, (group: string) =>
	  group?.toUpperCase().replace('-', '').replace('_', '')
	).replaceAll(" ", "");
};



