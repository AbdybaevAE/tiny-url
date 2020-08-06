import { createLinkDto, linkRo } from './util';
import { Service } from 'typedi';
import { UrlRepository } from '../../repositories/url-repository';
import { Url } from '../../entities/url';
import { OrmRepository } from 'typeorm-typedi-extensions';
@Service()
export class UrlModule {
    constructor( @OrmRepository() private readonly urlRepo: UrlRepository) {}

    async create(data: createLinkDto): Promise<string> {
        const shortUrl = data.url;
        return new Promise(resolve => {
            resolve(`Long url of short url - ${shortUrl}`);
        });
    }
    async list(): Promise<Url[]> {
        return this.urlRepo.find();
    }
}
