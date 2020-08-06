import { createLinkDto, linkRo } from './util';
import { Service } from 'typedi';
import { UrlRepository } from '../../repositories/url-repository';
import { Url } from '../../entities/url';
import { OrmRepository, InjectConnection } from 'typeorm-typedi-extensions';
import moment from 'moment';
import { isNil } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import {
    DEFAULT_EXPIRE_DATE_IN_MONTHS,
    IsolationLevel,
} from '../../lib/constants';
import { Transaction, TransactionRepository, Connection } from 'typeorm';
@Service()
export class UrlModule {
    constructor(
        @OrmRepository() private readonly urlRepo: UrlRepository,
        @InjectConnection() private readonly connection: Connection,
    ) {}

    async create(data: createLinkDto): Promise<string> {
        const longUrl = data.url;
        const now = new Date();
        if (isNil(data.expiredAt))
            data.expiredAt = moment()
                .add(DEFAULT_EXPIRE_DATE_IN_MONTHS, 'month')
                .toDate();
        const link = new Url();
        link.longUrl = longUrl;
        link.visitCount = 0;
        link.uuid = uuidv4();
        link.isActive = true;
        link.createdAt = now;
        link.updatedAt = now;
        link.lastVisitedAt = now;

        const queryRunner = this.connection.createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction(IsolationLevel.SERIALIZABLE);

            const maxLink = await queryRunner.connection
                .getRepository(Url)
                .createQueryBuilder('url')
                .select('MAX(url.id)', 'max')
                .getRawOne();
            const max = Number(maxLink.max);
            const nextValue = max + 1;
            link.number = nextValue;
            link.id = nextValue;
            link.shortUrl = 'some-hosrt-link';
            await queryRunner.commitTransaction();
            await queryRunner.release();
            return Promise.resolve('');
        } catch (e) {
            await queryRunner.rollbackTransaction();
            await queryRunner.release();
            throw e;
        }
    }
    async list(): Promise<Url[]> {
        return this.urlRepo.find();
    }
}
