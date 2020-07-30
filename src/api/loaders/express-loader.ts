import { Application } from 'express';
import {
    MicroframeworkLoader,
    MicroframeworkSettings,
} from 'microframework-w3tec';
import { createExpressServer } from 'routing-controllers';
import { config } from '../lib/config';
// import { authorizationChecker } from '../auth/authorizationChecker';
// import { currentUserChecker } from '../auth/currentUserChecker';
// import { env } from '../env';
import { SampleController } from '../controllers';
import {
    CompressionMiddleware,
    LogMiddleware,
    SecurityHstsMiddleware,
    SecurityMiddleware,
    SecurityNoCacheMiddleware,
} from '../middlewares';
export const expressLoader: MicroframeworkLoader = (
    settings: MicroframeworkSettings | undefined,
) => {
    if (!settings) return;
    const expressApp: Application = createExpressServer({
        cors: true,
        classTransformer: true,
        routePrefix: config.env.APP_ROUTE_PREFIX,
        defaultErrorHandler: false,

        controllers: [SampleController],
        middlewares: [
            CompressionMiddleware,
            LogMiddleware,
            SecurityHstsMiddleware,
            SecurityMiddleware,
            SecurityNoCacheMiddleware,
        ],
        interceptors: [],
    });
    const server = expressApp.listen(config.env.APP_PORT);
    settings.setData('express_server', server);
    settings.setData('express_app', expressApp);
    // if (!env.isTest) {
    //     const server = expressApp.listen(env.app.port);
    //     settings.setData('express_server', server);
    // }

    // Here we can set the data for other loaders
    // settings.setData('express_app', expressApp);
};
