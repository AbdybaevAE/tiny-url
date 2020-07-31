import { CompressionMiddleware } from './compression-middleware';
import { LogMiddleware } from './log-middleware';
import { SecurityHstsMiddleware } from './security-hsts-middleware';
import { SecurityMiddleware } from './security-middleware';
import { SecurityNoCacheMiddleware } from './security-no-cache-middleware';

export const AllMiddlewares = [
    CompressionMiddleware,
    LogMiddleware,
    SecurityHstsMiddleware,
    SecurityMiddleware,
    SecurityNoCacheMiddleware,
];

export {
    CompressionMiddleware,
    LogMiddleware,
    SecurityHstsMiddleware,
    SecurityMiddleware,
    SecurityNoCacheMiddleware,
};
