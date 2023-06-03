import { spawn, exec } from "node:child_process";

export const dependencyInstaller = (library: string, isDevDep: boolean = false) => {

    const p1 = new Promise((resolve, reject) => {  
        const devDep = isDevDep ? '-D' : '';

    const a = exec(`npm install ${devDep} ${library}`, (err, stdout, stderr) => {

        if (err) {
            reject(err);
            console.log('Error:', err);
        }

        if (stderr) {  
            reject(stderr);
            console.log('Error:', stderr);
        } 
        resolve(stdout);
        console.log('stdout', stdout);
        
    });
 });

 return p1;
    
};