import jest from 'jest';
import { NodeJsLibrary } from '../src/projects/NodeJsLibrary';
import { PROJECT_TYPES } from '../src/types/ProjectTypes';

describe("sample test", () => {

	// it('test 1', () => {
	//     const a = 1;
	//     const b = 4;

	//     const answer = 5;

	//     const result = add(a,b);

	//     expect(result).toBe(answer)
	// });

	// it('test 2', () => {
	//     const a = 1;
	//     const b = 4;

	//     const answer = 9;

	//     const result = add(a, b);

	//     expect(result).not.toBe(answer)
	// });

	it.skip('Node JS Project', async () => {
		const project = new NodeJsLibrary();
		await project.createProject();

		expect(project.projectType).toBe(PROJECT_TYPES.LIBRARY)
	});
});
