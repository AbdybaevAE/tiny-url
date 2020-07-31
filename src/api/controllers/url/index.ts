import { JsonController, Get, Post, Body } from 'routing-controllers';
import { BaseController } from '../base';
import { shortenLinkDto } from './dto';
import Joi from 'joi';
import {
    GetDefaultExpireDateFromNow,
    GetEarliestExpireDateFromNow,
} from '../../lib/util';
@JsonController('/shorten')
export class UrlController extends BaseController {
    @Post()
    public shortenLink(@Body() data: shortenLinkDto): any {
        const schema = Joi.object({
            url: Joi.string()
                .required()
                .uri({
                    scheme: ['https', 'http'],
                }),
            expireAt: Joi.date()
                .optional()
                .default(GetDefaultExpireDateFromNow())
                .min(GetEarliestExpireDateFromNow()),
        });
        const { value, error } = schema.validate(data);
        return {
            error,
            value,
        };
    }
}
