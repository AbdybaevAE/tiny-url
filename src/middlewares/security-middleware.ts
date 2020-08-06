import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before' })
export class SecurityMiddleware implements ExpressMiddlewareInterface {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public use(req: Request, res: Response, next: NextFunction): any {
        return helmet()(req, res, next);
    }
}
