import { Request, Response, NextFunction } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import log from '../lib/logger';
@Middleware({ type: 'before' })
export class LogMiddleware implements ExpressMiddlewareInterface {
    public use(
        req: Request,
        res: Response,
        next: NextFunction,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ): any {
        log.info(req.url, req.query);
        next();
    }
}
