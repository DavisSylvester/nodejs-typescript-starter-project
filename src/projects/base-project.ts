import { getProjectName, includeJestTesting, selectProjectType } from "../prompts/menu-prompts.js";
import { PROJECT_TYPES, ProjectType } from "../types/ProjectTypes.js";

export abstract class BaseProject<T> {

	#projectName: string;
	#requireJestTesting: boolean;
	#projectType: ProjectType;

	protected set projectName(value: string) {
		this.#projectName = value;
	}
	protected get projectName() {
		return this.#projectName;
	}

	protected set requireJestTesting(value: boolean) {
		this.#requireJestTesting = value;
	}
	protected get requireJestTesting() {
		return this.#requireJestTesting;
	}

	protected set projectType(value: ProjectType) {
		this.#projectType = value;
	}
	public get projectType() {
		return this.#projectType;
	}

	constructor() {

	}

	public async init() {
		const menuValues = await this.showMenus();
	}

	protected async showMenus() {
		const projectName = await getProjectName();
		const addTesting = await includeJestTesting();
		const projectType = await selectProjectType();

		this.projectName = projectName;
		this.requireJestTesting = (addTesting === 'true') ? true : false;
		this.projectType = projectType;

		return {
			projectName,
			includeJestTesting: (addTesting === 'true') ? true : false,
			projectType,
		}
	}

	protected abstract createProject(): Promise<T>;
	protected abstract addTestingFramework(): T;
}

