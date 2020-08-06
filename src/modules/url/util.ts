import Joi from 'joi';
import { GetEarliestExpireDateFromNow } from '../../lib/util';
import { Url } from '../../entities/url';

export type createLinkDto = {
    url: string;
    expiredAt?: Date;
};
export const createLinkSchema = Joi.object({
    url: Joi.string()
        .required()
        .uri({
            scheme: ['https', 'http'],
        }),
    expireAt: Joi.date().optional().min(GetEarliestExpireDateFromNow()),
});

export type linkRo = {
    id: number;
    longUrl: string;
    shortUrl: string;
    createdAt: Date;
    expiredAt: Date;
};
