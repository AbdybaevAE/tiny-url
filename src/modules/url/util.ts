import Joi from 'joi';
import { GetEarliestExpireDateFromNow } from '../../lib/util';

export interface createTinyUrlDto {
    url: string;
    expiredAt?: Date;
}
export const createTinyUrlSchema = Joi.object({
    url: Joi.string()
        .required()
        .uri({
            scheme: ['https', 'http'],
        }),
    expireAt: Joi.date().optional().min(GetEarliestExpireDateFromNow()),
});
