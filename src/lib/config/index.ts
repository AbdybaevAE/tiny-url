import * as path from 'path';
import { Enivornment } from '../constants';

import { TEnvMap, envObject } from '../env';
type TConfig = {
    isProduction: boolean;
    isDevelopment: boolean;
    isStaging: boolean;
    env: TEnvMap;
};
export const config: TConfig = {
    env: envObject,
    isProduction: envObject.NODE_ENV === Enivornment.PRODUCTION,
    isDevelopment: envObject.NODE_ENV === Enivornment.DEVELOPMENT,
    isStaging: envObject.NODE_ENV === Enivornment.STAGING,
};

export const root = path.normalize(path.join(__dirname, '../../'));
