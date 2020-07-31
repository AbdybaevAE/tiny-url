import {
    MicroframeworkLoader,
    MicroframeworkSettings,
} from 'microframework-w3tec';
import { createConnection, getConnectionOptions } from 'typeorm';
import { config } from '../lib/config';
import { apiDir } from '../lib/constants';
import * as path from 'path';
const { env } = config;

export const typeormLoader: MicroframeworkLoader = async (
    settings: MicroframeworkSettings | undefined,
) => {
    const loadedConnectionOptions = await getConnectionOptions();

    const connectionOptions = Object.assign(loadedConnectionOptions, {
        type: 'postgres',
        host: env.TYPEORM_HOST,
        port: env.TYPEORM_PORT,
        username: env.TYPEORM_USERNAME,
        password: env.TYPEORM_PASSWORD,
        database: env.TYPEORM_DATABASE,
        synchronize: false,
        entities: path.join(apiDir, 'entities'),
        migrations: path.join(apiDir, 'migrations'),
    });

    const connection = await createConnection(connectionOptions);

    if (settings) {
        settings.setData('connection', connection);
        settings.onShutdown(() => connection.close());
    }
};
