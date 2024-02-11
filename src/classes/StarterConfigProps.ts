import { CONSTANTS } from "../config/constants.js";
import { IStarterConfigProps } from "../types/IstarterconfigProps.js";
import { NPM_REGISTRY_HOST, NPM_REGISTRY_TYPE } from "../types/ProjectTypes.js";

export class StarterConfigProps {

	constructor(private config: IStarterConfigProps) {
	}
}
