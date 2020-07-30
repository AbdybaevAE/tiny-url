import { InArray } from '../util';
import * as path from 'path';
export enum Enivornment {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    STAGING = 'staging',
}
export const EnvironmentList = Object.values(Enivornment);
export const InEnvList = (value: string): boolean => {
    return InArray(EnvironmentList, value);
};
export const root = path.normalize(path.join(__dirname, '../../../../'));
