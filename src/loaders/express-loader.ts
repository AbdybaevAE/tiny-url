import { Application } from 'express';
import {
    MicroframeworkLoader,
    MicroframeworkSettings,
} from 'microframework-w3tec';
import { createExpressServer } from 'routing-controllers';
import { config } from '../lib/config';
import { AllControllers } from '../modules';
import { AllMiddlewares } from '../middlewares';
import * as bodyParser from 'body-parser';
export const expressLoader: MicroframeworkLoader = (
    settings: MicroframeworkSettings | undefined,
) => {
    if (!settings) return console.log('wtf');
    const expressApp: Application = createExpressServer({
        cors: true,
        classTransformer: true,
        routePrefix: config.env.APP_ROUTE_PREFIX,
        defaultErrorHandler: false,

        controllers: AllControllers,
        middlewares: AllMiddlewares,
        interceptors: [],
    });
    expressApp.use(bodyParser.json());
    expressApp.use(bodyParser.urlencoded({ extended: true }));
    const server = expressApp.listen(config.env.APP_PORT);
    return server;
};
