import { EntityRepository, Repository } from 'typeorm';
import { Url } from '../entities/url';
import { Service } from 'typedi';

@Service()
@EntityRepository(Url)
export class UrlRepository extends Repository<Url> {}
