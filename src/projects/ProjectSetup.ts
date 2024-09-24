import * as _ from "lodash";
import { StarterConfigProps } from "../classes/StarterConfigProps.js";
import { MenuProps } from "../interfaces/menuProps.js";
import { getProjectName, selectProgrammingLanguage, selectProjectType } from "../prompts/menu-prompts.js";

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

			this.#menuProps.projectNameSnake = _.snakeCase(this.#menuProps.projectName);
			this.#menuProps.projectNameCamel = _.camelCase(this.#menuProps.projectName);

			return this;
		} catch (error) {
			console.error(error);
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
