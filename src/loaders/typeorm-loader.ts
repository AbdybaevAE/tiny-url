import {
    MicroframeworkLoader,
    MicroframeworkSettings,
} from 'microframework-w3tec';
import { createConnection, getConnectionOptions } from 'typeorm';
import { config } from '../lib/config';
import { root } from '../lib/constants';
import * as path from 'path';
const { env } = config;
export const typeormLoader: MicroframeworkLoader = async (
    settings: MicroframeworkSettings | undefined,
) => {
    const connection = await createConnection({
        type: 'postgres',
        host: env.TYPEORM_HOST,
        port: env.TYPEORM_PORT,
        username: env.TYPEORM_USERNAME,
        password: env.TYPEORM_PASSWORD,
        database: env.TYPEORM_DATABASE,
        synchronize: false,
        entities: [path.join(root, 'entities/*.ts')],
        migrations: [path.join(root, 'migrations/*.ts')],
    });

    if (settings) {
        settings.setData('connection', connection);
        settings.onShutdown(() => connection.close());
    }
};
