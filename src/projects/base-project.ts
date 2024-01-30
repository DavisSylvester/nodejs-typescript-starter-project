import { getProjectName, includeJestTesting, libraryPublishLocationMenu, publishLibraryToRegistryMenu, selectProjectType } from "../prompts/menu-prompts.js";
import { NPM_REGISTRY_HOST, NPM_REGISTRY_TYPE, PROJECT_TYPES, ProjectType } from "../types/ProjectTypes.js";

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
		this.requireJestTesting = await includeJestTesting();
		const projectType = await selectProjectType();

		this.projectName = projectName;
		this.projectType = projectType;

		return {
			projectName,
			includeJestTesting: this.requireJestTesting,
			projectType,
		}
	}

	protected async libraryMenu() {

		// Library Menu:  Public or Private

		const publishToRegistry = await publishLibraryToRegistryMenu();

		if (publishToRegistry) {
			// Show Registry Location Menu
			const npmRegistryType = await libraryPublishLocationMenu();

			if (npmRegistryType === NPM_REGISTRY_HOST.GITHUB) {
				// Show Public Registry Menu
			}
		}

	}

	protected abstract createProject(): Promise<T>;
	protected abstract addTestingFramework(): T;
}

