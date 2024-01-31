import { NPM_REGISTRY_HOST, NPM_REGISTRY_TYPE, ProjectType } from "./ProjectTypes.js";
import { RegistryConfigProps } from "./registryConfigProps.js";

export interface IStarterConfigProps {

	projectName: string;
	projectType: ProjectType;

	requireTesting: boolean;

	registry?: RegistryConfigProps;

};

