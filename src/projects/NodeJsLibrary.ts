import { BaseProject } from "./base-project.js";

export class NodeJsLibrary extends BaseProject {

	constructor() {
		super();
	}

	public async createProject() {

		await this.init();
	}

}
