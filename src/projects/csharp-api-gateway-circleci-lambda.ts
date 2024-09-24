import { BaseProject } from "./base-project.js";

export class CsharpApiGatewayCircleciLambda extends BaseProject<CsharpApiGatewayCircleciLambda> {

	constructor() {
		super();
	}

	public async createProject() {

		await this.init();
		return this;
	}

	public addTestingFramework(): this {

		// if (!this.) {
		// 	return this;
		// }

		return this;
	}
}
