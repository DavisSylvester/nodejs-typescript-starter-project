import { ProgrammingLanguageType } from "../types/ProjectTypes.js";

export interface CreateProject {
	createProject(language: ProgrammingLanguageType): Promise<void>;
	addTestingFramework(): void;

}
