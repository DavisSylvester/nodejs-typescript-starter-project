import { StarterConfigProps } from "../classes/StarterConfigProps.js";
import { MenuProps } from "../interfaces/menuProps.js";
import { getProjectName, selectProgrammingLanguage, selectProjectType } from "../prompts/menu-prompts.js";
import { toCamelCase, toKebabCase, toPascalCase, toSnakeCase } from "../helper/utils.js";

export class ProjecSetup {

		private config: StarterConfigProps;
		#menuProps: MenuProps = {} as MenuProps;

		get MenuProps() {
			return this.#menuProps
		}

		constructor() {

		}

		public async init() {
			try {


			const menuValues = await this.showMenus();


			this.#menuProps = { ...menuValues };

			// console.log(this.#menuProps.projectName.toSnakeCase());
			this.#menuProps.projectNameSnake = toSnakeCase(this.#menuProps.projectName);
			this.#menuProps.projectNameCamel = toCamelCase(this.#menuProps.projectName);
			this.#menuProps.projectNameKebab = toKebabCase(this.#menuProps.projectName);
			this.#menuProps.projectNamePascal = toPascalCase(this.#menuProps.projectName);

			return this;
		} catch (error) {
			console.log('Project Name is required!')
			// console.error(error);
			}
		}

		protected async showMenus() {
			const projectName = await getProjectName();

			if (!projectName) {
				throw new Error('Project Name is required');
			}
			const programmingLanguage = await selectProgrammingLanguage();
			const projectType = await selectProjectType(programmingLanguage);

			return {
				projectName,
				projectType,
				programmingLanguage,
			} as MenuProps;
		}

		protected generateProjectConfig(props: MenuProps) {

			this.config = new StarterConfigProps({
				projectName: props.projectName.toLowerCase(),
				projectType: props.projectType,
				requireTesting: props.includeTesting,
			});

			console.log(this.config);

		}

}
