import { readFile, stat, unlink, writeFile, access, constants } from "node:fs/promises";
import path from "path";
import { PACKAGE_JSON_TEMPLATES } from "../src/helper/template.variable";


describe('Template File Creation', () => {

	const projectFilePath = `./project-files`;
	const packageJsonTemplate = path.join(projectFilePath, 'package.json.template');
	const sampleProjectFolder = `./sample-project`;
	const writtenPackageJson = path.join(sampleProjectFolder, 'package.json');

	beforeAll(async () => {

	});

	afterAll(async () => {
		console.log('Removing package.json');
		deleteFile(writtenPackageJson);
	});

	test('Template Replacement', async () => {

		const packageJsonFile = await readFile(packageJsonTemplate);

		const updatedFile = packageJsonFile.toString().replace(PACKAGE_JSON_TEMPLATES.PROJECT_NAME, '@test/test-project');

		expect(updatedFile).toContain('@test/test-project');
	});

	test('Write Package JSON Template', async () => {

		const packageJsonTemplateFile = await readFile(packageJsonTemplate);

		const updatedFile = packageJsonTemplateFile.toString().replace(PACKAGE_JSON_TEMPLATES.PROJECT_NAME, '@test/test-project');

		await writeFile(writtenPackageJson, updatedFile);

		expect(await stat(writtenPackageJson)).toBeTruthy();

	});


});


const deleteFile = async (filePath: string) => {
	try {
		await access(filePath, constants.F_OK);
		await unlink(filePath);
	} catch (error) {
		console.log('File does not exist');
	}
};
