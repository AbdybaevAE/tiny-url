import { createTinyUrlDto } from './util';
import { Service } from 'typedi';

@Service()
export class UrlModule {
    constructor() {
        console.log('creatin ulr serbice');
    }
    async createTinyUrl(data: createTinyUrlDto): Promise<string> {
        const shortUrl = data.url;
        return new Promise(resolve => {
            resolve(`Long url of short url - ${shortUrl}`);
        });
    }
}
