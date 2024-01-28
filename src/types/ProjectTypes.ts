export type ProjectType = 'lib' | 'app' | 'cdk' | 'api';
export type ProjectName = 'LIBRARY' | 'APPLICATION' | 'CDK' | 'API';

export const PROJECT_TYPES: ProjectTypeValue = {
	LIBRARY: 'lib',
	APPLICATION: 'app',
	CDK: 'cdk',
	API: 'api',
};

type ProjectTypeValue = {
	[key in ProjectName]: ProjectType;
 }
