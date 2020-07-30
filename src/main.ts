import 'reflect-metadata';

import { bootstrapMicroframework } from 'microframework-w3tec';
import log from './api/lib/logger';
// import { eventDispatchLoader } from './loaders/eventDispatchLoader';
import { expressLoader } from './api/loaders/express-loader';
// import { graphqlLoader } from './loaders/graphqlLoader';
// import { homeLoader } from './loaders/homeLoader';
// import { iocLoader } from './loaders/iocLoader';
// import { monitorLoader } from './loaders/monitorLoader';
// import { publicLoader } from './loaders/publicLoader';
// import { swaggerLoader } from './loaders/swaggerLoader';
// import { typeormLoader } from './loaders/typeormLoader';
// import { winstonLoader } from './loaders/winstonLoader';

log.info();
(async () => {
    try {
        await bootstrapMicroframework({
            loaders: [expressLoader],
        });
    } catch (e) {
        log.error('Application crashed', e);
    }
})();
