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