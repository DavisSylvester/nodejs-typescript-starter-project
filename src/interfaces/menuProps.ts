import { ProgrammingLanguageType, ProjectType } from "../types/ProjectTypes.js";
import { RegistryConfig } from "./registryConfig.js";

export interface MenuProps {

	projectName: string;
	projectNameSnake: string;
	projectNameCamel: string;
	includeTesting: boolean;
	projectType: ProjectType;
	programmingLanguage: ProgrammingLanguageType;

	registryConfig?: RegistryConfig | null;
}
