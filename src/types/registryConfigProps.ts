import { NPM_REGISTRY_HOST, NPM_REGISTRY_TYPE } from "./ProjectTypes.js";

export interface RegistryConfigProps {
	registryHost?: NPM_REGISTRY_HOST;
	registryType?: NPM_REGISTRY_TYPE;
	get registryUrl(): string;
	// TODO: Allow users to publish to both Gitgub and NPMJS
	// _publishToGithubAndNpmjs?: boolean;
}
