import * as dotenv from 'dotenv';
import * as path from 'path';
import {
    getEnv,
    toBoolean,
    toNumber,
    InArray,
    IsNumber,
    IsEmptyString,
} from '../util';
import { environmentsError } from '../errors';
import { EnvironmentList, root } from '../constants';
import log from '../logger';

export type TEnvConfig = {
    NODE_ENV: string;
    APP_HOST: string;
    APP_PORT: number;
    TYPEORM_HOST: string;
    TYPEORM_PORT: number;
    TYPEORM_USERNAME: string;
    TYPEORM_PASSWORD: string;
    TYPEORM_DATABASE: string;
    APP_ROUTE_PREFIX: string;
    DOT_ENV_CONFIG: boolean;
};

export const envKeys: {
    [key in keyof TEnvConfig]: string;
} = {
    NODE_ENV: 'NODE_ENV',
    APP_HOST: 'APP_HOST',
    APP_PORT: 'APP_PORT',
    TYPEORM_HOST: 'TYPEORM_HOST',
    TYPEORM_PORT: 'TYPEORM_PORT',
    TYPEORM_USERNAME: 'TYPEORM_USERNAME',
    TYPEORM_PASSWORD: 'TYPEORM_PASSWORD',
    TYPEORM_DATABASE: 'TYPEORM_DATABASE',
    APP_ROUTE_PREFIX: 'APP_ROUTE_PREFIX',
    DOT_ENV_CONFIG: 'DOT_ENV_CONFIG',
};
const dotEnvValue = toBoolean(getEnv('DOT_ENV_CONFIG'));

if (dotEnvValue) {
    dotenv.config({
        path: path.join(root, '.env'),
    });
}

export const envObject: TEnvConfig = {
    NODE_ENV: getEnv(envKeys.NODE_ENV),
    APP_HOST: getEnv(envKeys.APP_HOST),
    APP_PORT: toNumber(getEnv(envKeys.APP_PORT)),
    TYPEORM_HOST: getEnv(envKeys.TYPEORM_HOST),
    TYPEORM_PORT: toNumber(getEnv(envKeys.TYPEORM_PORT)),
    TYPEORM_USERNAME: getEnv(envKeys.TYPEORM_USERNAME),
    TYPEORM_PASSWORD: getEnv(envKeys.TYPEORM_PASSWORD),
    TYPEORM_DATABASE: getEnv(envKeys.TYPEORM_DATABASE),
    APP_ROUTE_PREFIX: getEnv(envKeys.APP_ROUTE_PREFIX),
    DOT_ENV_CONFIG: dotEnvValue,
};
log.info('envs', envObject);
// Validate environment values starts
[envObject.APP_PORT, envObject.TYPEORM_PORT].forEach(value => {
    if (!IsNumber(value)) throw environmentsError;
});
[
    envObject.APP_HOST,
    envObject.TYPEORM_DATABASE,
    envObject.TYPEORM_PASSWORD,
].forEach(value => {
    if (IsEmptyString(value)) throw environmentsError;
});
if (!InArray(EnvironmentList, envObject.NODE_ENV)) throw environmentsError;
// Validate environment values end

export { envObject as env };
// export const env = {
//   node: process.env.NODE_ENV || 'development',
//   isProduction: process.env.NODE_ENV === 'production',
//   isStaging: process.env.NODE_ENV === 'test',
//   isDevelopment: process.env.NODE_ENV === 'development',
//   app: {
//     host: getOsEnv('APP_HOST'),
//     routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
//     port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')),
//   },
//   log: {
//     level: getOsEnv('LOG_LEVEL'),
//     json: toBool(getOsEnvOptional('LOG_JSON')),
//     output: getOsEnv('LOG_OUTPUT'),
//   },
//   db: {
//     type: getOsEnv('TYPEORM_CONNECTION'),
//     host: getOsEnvOptional('TYPEORM_HOST'),
//     port: toNumber(getOsEnvOptional('TYPEORM_PORT')),
//     username: getOsEnvOptional('TYPEORM_USERNAME'),
//     password: getOsEnvOptional('TYPEORM_PASSWORD'),
//     database: getOsEnv('TYPEORM_DATABASE'),
//   },
// };
