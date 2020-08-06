import {
    JsonController,
    Get,
    Post,
    Body,
    Controller,
} from 'routing-controllers';
import {
    BaseController,
    TResponse,
    TSuccessResponse,
    TFailureResponse,
} from '../base/controller';
// import { TYPES } from '../../types';
import { createTinyUrlDto, createTinyUrlSchema } from './util';
import { HttpInvalidBody, THttpError } from '../../lib/errors';
import { UrlModule } from '.';
import { Service } from 'typedi';

@Service()
@JsonController()
@Controller('/shorten')
export class UrlController extends BaseController {
    constructor(private readonly urlModule: UrlModule) {
        super();
    }

    @Post('/')
    async createTinyUrl(
        @Body() data: createTinyUrlDto,
    ): Promise<TResponse<string>> {
        console.log('data is ', data);
        const { value, error } = createTinyUrlSchema.validate(data);
        console.log(error);
        if (error) return this.error(HttpInvalidBody);
        try {
            const shortLink = await this.urlModule.createTinyUrl(value);
            return this.success(shortLink);
        } catch (e) {
            return this.error(e);
        }
    }
}
