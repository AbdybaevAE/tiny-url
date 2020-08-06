import { Enivornment } from '../constants';

import { TEnvConfig, envObject } from '../env';
type TConfig = {
    isProduction: boolean;
    isDevelopment: boolean;
    isStaging: boolean;
    env: TEnvConfig;
};
export const config: TConfig = {
    env: envObject,
    isProduction: envObject.NODE_ENV === Enivornment.PRODUCTION,
    isDevelopment: envObject.NODE_ENV === Enivornment.DEVELOPMENT,
    isStaging: envObject.NODE_ENV === Enivornment.STAGING,
};
