import { NPM_REGISTRY_HOST, NPM_REGISTRY_TYPE } from "./ProjectTypes.js";

export interface IStarterConfigProps {

	registryHost: NPM_REGISTRY_HOST;
	registryType: NPM_REGISTRY_TYPE;
	get registryUrl(): string;

};

