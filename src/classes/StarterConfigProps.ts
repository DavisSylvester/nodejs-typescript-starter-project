import { CONSTANTS } from "../config/constants.js";
import { IStarterConfigProps } from "../types/IstarterconfigProps.js";
import { NPM_REGISTRY_HOST, NPM_REGISTRY_TYPE } from "../types/ProjectTypes.js";

export class StarterConfigProps {

	//#region Properties
	_registryUrl: string;
	//#endregion

	//#region Getters
	get registryUrl(): string {
		return this._registryUrl;
	}

	//#endregion

	constructor(public config: IStarterConfigProps) {

		this.setConfig(this.config);
	}

	private setConfig(config: IStarterConfigProps) {
		switch (config.registry) {

			case NPM_REGISTRY_HOST.GITHUB:
				this._registryUrl = CONSTANTS.NPM_REGISTY_GITHUB;
				break;

			case NPM_REGISTRY_HOST.NPMJS:
				this._registryUrl = CONSTANTS.NPM_REGISTY_NPMJS;
				break;

			default:
				this._registryUrl = CONSTANTS.NPM_REGISTY_NPMJS;
		}

	}
}
