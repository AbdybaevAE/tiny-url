import {
    JsonController,
    Get,
    Post,
    Body,
    Controller,
} from 'routing-controllers';
import { BaseController, TResponse } from '../base/controller';
// import { TYPES } from '../../types';
import { createLinkDto, createLinkSchema, linkRo } from './util';
import { HttpInvalidBody, THttpError } from '../../lib/errors';
import { UrlModule } from '.';
import { Service } from 'typedi';
import { Url } from '../../entities/url';

@Service()
@JsonController()
@Controller('/shorten')
export class UrlController extends BaseController {
    constructor(private readonly urlModule: UrlModule) {
        super();
    }

    @Post('/')
    async createTinyUrl(
        @Body() body: createLinkDto,
    ): Promise<TResponse<string>> {
        const { value, error } = this.validate(createLinkSchema, body);
        if (error) return this.error(HttpInvalidBody);
        try {
            const shortLink = await this.urlModule.create(value);
            return this.success(shortLink);
        } catch (e) {
            return e;
        }
    }
    @Get('/')
    async list(): Promise<TResponse<Url[]>> {
        // const { value, error } = this.validate(createTinyUrlSchema, body);
        // if (error) return this.error(HttpInvalidBody);
        try {
            const list = await this.urlModule.list();
            return this.success(list);
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
