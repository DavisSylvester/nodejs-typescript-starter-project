export type ProjectType = 'lib' | 'app' | 'cdk' | 'api';
export type ProjectName = 'LIBRARY' | 'APPLICATION' | 'CDK' | 'API';

export type ProgrammingLanguageType = 'nodejs-typescript' | 'c-sharp';
export type ProgrammingLanguageName = 'Node - Typescript' | 'C#';

export type CsharpProjectType = 'lib' | 'gateway_project';
export type CsharpProjectName = 'C# LIBRARY' | 'IDB Gateway - Auth0 - CircleCi - Lambda';

export const PROJECT_TYPES: ProjectTypeValue<ProjectName, ProjectType> = {
	LIBRARY: 'lib',
	APPLICATION: 'app',
	CDK: 'cdk',
	API: 'api',
};

export const PROGRAMMING_LANGUAGES_TYPES: ProjectTypeValue<ProgrammingLanguageName, ProgrammingLanguageType> = {

	"Node - Typescript": "nodejs-typescript",
	"C#": "c-sharp",
};

export const C_SHARP_PROJECT_TYPES: ProjectTypeValue<CsharpProjectName, CsharpProjectType> = {

	"IDB Gateway - Auth0 - CircleCi - Lambda": "gateway_project",
	"C# LIBRARY": "lib",
};

type ProjectTypeValue<T, R> = {
	//@ts-ignore
	[key in T]: R;
}

export enum NPM_REGISTRY_HOST {
	GITHUB = 'github',
	NPMJS = 'npmjs',
}

export enum NPM_REGISTRY_TYPE {
	PUBLIC = 'public',
	PRIVATE = 'private',
}
