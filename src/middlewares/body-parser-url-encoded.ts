import { Request, Response, NextFunction } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import * as bodyParser from 'body-parser';
@Middleware({ type: 'before' })
export class BodyParserUrlEncoded implements ExpressMiddlewareInterface {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public use(req: Request, res: Response, next: NextFunction): any {
        return bodyParser.urlencoded({ extended: true })(req, res, next);
    }
}
