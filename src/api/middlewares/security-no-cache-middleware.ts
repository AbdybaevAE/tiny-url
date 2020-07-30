import { Request, Response, NextFunction } from 'express';
import * as helmet from 'helmet';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before' })
export class SecurityNoCacheMiddleware implements ExpressMiddlewareInterface {
    public use(
        req: Request,
        res: Response,
        next: NextFunction,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ): any {
        return helmet.noCache()(req, res, next);
    }
}
