import { JsonController, Get } from 'routing-controllers';
type TSample = {
    id: number;
    text: string;
};
const users: TSample[] = new Array(10).fill(null).map((item, index) => ({
    id: index,
    text: String(Math.random()),
}));
@JsonController('/sample')
export class SampleController {
    @Get()
    public findAll(): TSample[] {
        return users;
    }
}
