import { InArray } from '../util';

export enum Enivornment {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    STAGING = 'staging',
}
export const EnvironmentList = Object.values(Enivornment);
export const InEnvList = (value: string): boolean => {
    return InArray(EnvironmentList, value);
};
