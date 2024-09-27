import { spawn } from "child_process";

export const cloneGitRepo = async (url: string) => {

	console.log('Cloning Git Repo...');

	await new Promise((resolve, reject) => {

		const child = spawn('git', ['clone', url], { stdio: 'overlapped' });

		child.on('exit', (code) => {
			if (code === 0) {
				resolve(code);
			} else {
				reject(code);
			}
		});

});
};
