import { CompressionMiddleware } from './compression-middleware';
import { LogMiddleware } from './log-middleware';
import { SecurityHstsMiddleware } from './security-hsts-middleware';
import { SecurityMiddleware } from './security-middleware';
import { SecurityNoCacheMiddleware } from './security-no-cache-middleware';
import { BodyParserUrlEncoded } from './body-parser-url-encoded';
import { BodyParserJsonMiddleware } from './body-parser-json';
// import { BodyParserMiddleware } from './body-parser-middleware';
export const AllMiddlewares = [
    BodyParserUrlEncoded,
    BodyParserJsonMiddleware,
    CompressionMiddleware,
    LogMiddleware,
    SecurityHstsMiddleware,
    SecurityMiddleware,
    SecurityNoCacheMiddleware,
];

export {
    BodyParserJsonMiddleware,
    BodyParserUrlEncoded,
    CompressionMiddleware,
    LogMiddleware,
    SecurityHstsMiddleware,
    SecurityMiddleware,
    SecurityNoCacheMiddleware,
};
