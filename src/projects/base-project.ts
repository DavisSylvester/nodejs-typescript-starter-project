import { StarterConfigProps } from "../classes/StarterConfigProps.js";
import { CONSTANTS } from "../config/constants.js";
import { MenuProps } from "../interfaces/menuProps.js";
import { getProjectName, includeJestTesting, libraryPublishRegistryMenu, publishLibraryToPackageSecurity, publishLibraryToRegistryMenu, selectProjectType } from "../prompts/menu-prompts.js";
import { NPM_REGISTRY_HOST, NPM_REGISTRY_TYPE, PROJECT_TYPES, ProjectType } from "../types/ProjectTypes.js";

export abstract class BaseProject<T> {

	private config: StarterConfigProps;
	private menuProps: MenuProps = {} as MenuProps;

	constructor() {

	}

	public async init() {
		const menuValues = await this.showMenus();

		this.menuProps = { ...menuValues };

		await this.showMenuByProjectType(this.menuProps.projectType);

		this.generateProjectConfig(this.menuProps);
	}

	protected async showMenus() {
		const projectName = await getProjectName();
		const projectType = await selectProjectType();
		const includeTesting = await includeJestTesting();

		return {
			projectName,
			includeTesting,
			projectType,
		} as MenuProps;
	}

	protected async libraryMenu() {

		// Library Menu:  Public or Private
		let npmRegistryHost: NPM_REGISTRY_HOST | null = null;
		let npmRegistryType: NPM_REGISTRY_TYPE | null = null;

		const publishToRegistry = await publishLibraryToRegistryMenu();

		if (publishToRegistry) {
			// Show Registry Location Menu
			npmRegistryHost = await libraryPublishRegistryMenu();
			npmRegistryType = await publishLibraryToPackageSecurity();
		}

		return {
			publishToRegistry,
			npmRegistryHost,
			npmRegistryType,
		};
	}

	protected generateProjectConfig(props: MenuProps) {

		this.config = new StarterConfigProps({
			projectName: props.projectName.toLowerCase(),
			projectType: props.projectType,
			requireTesting: props.includeTesting,
		});

		console.log(this.config);

	}

	protected async showMenuByProjectType(projectType: ProjectType) {

		switch (projectType) {

			case PROJECT_TYPES.LIBRARY:
				await this.setLibraryMenuValues();
				break;

		}
	}

	protected async setLibraryMenuValues() {

		let npmHost: NPM_REGISTRY_HOST;

		const registryMenuValues = await this.libraryMenu();

		if (!registryMenuValues.publishToRegistry) {
			this.menuProps = {
				...this.menuProps,
				registryConfig: null
			};
		} else {

			npmHost = this.setRegistryHost(registryMenuValues.npmRegistryHost!);

			this.menuProps = {
				...this.menuProps,
				registryConfig: {
					registryHost: registryMenuValues.npmRegistryHost!,
					registryType: registryMenuValues.npmRegistryType!,
					registryUrl:
						(npmHost === NPM_REGISTRY_HOST.GITHUB)
							? CONSTANTS.NPM_REGISTY_GITHUB
							: CONSTANTS.NPM_REGISTY_NPMJS,
				},
			};
		}
	}

	private setRegistryHost(npmRegistryHost: NPM_REGISTRY_HOST) {

		let npmHost: NPM_REGISTRY_HOST | null = null;

		switch (npmRegistryHost) {

			case NPM_REGISTRY_HOST.GITHUB:
				npmHost = NPM_REGISTRY_HOST.GITHUB;
				break;

			case NPM_REGISTRY_HOST.NPMJS:
				npmHost = NPM_REGISTRY_HOST.NPMJS;
				break;

			default:
				npmHost = NPM_REGISTRY_HOST.NPMJS;
				return npmHost;
		}

		return npmHost;
	}


	protected abstract createProject(): Promise<T>;
	protected abstract addTestingFramework(): T;
}

