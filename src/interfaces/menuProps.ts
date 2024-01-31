import { ProjectType } from "../types/ProjectTypes.js";
import { RegistryConfig } from "./registryConfig.js";

export interface MenuProps {

	projectName: string;
	includeTesting: boolean;
	projectType: ProjectType;

	registryConfig?: RegistryConfig | null;
}
