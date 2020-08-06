import 'reflect-metadata';
import { bootstrapMicroframework } from 'microframework-w3tec';
import { Container } from 'typedi';
import { useContainer as routingUseContainer } from 'routing-controllers';
import { useContainer as ormUseContainer } from 'typeorm';
import { expressLoader } from './loaders/express-loader';
import log from './lib/logger';

async function init() {
    try {
        routingUseContainer(Container);
        ormUseContainer(Container);
        await bootstrapMicroframework({
            loaders: [expressLoader],
        });
        log.info('Application susscessfully started...');
    } catch (e) {
        log.error('Application crashed', e);
    }
}
init();
