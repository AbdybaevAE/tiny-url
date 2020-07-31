import { JsonController, Get } from 'routing-controllers';
import { TResponse, BaseController } from '../base';
type TUser = {
    id: number;
    text: string;
};
const users: TUser[] = new Array(10).fill(null).map((item, index) => ({
    id: index,
    text: String(Math.random()),
}));
const GetUsers = (): Promise<TUser[]> => {
    return new Promise(resolve => {
        resolve(users);
    });
};
const AddUser = (user: TUser): Promise<boolean> => {
    return new Promise(resolve => {
        users.push(user);
        resolve(true);
    });
};
const GetUserById = (userId: number): Promise<TUser> => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.id === userId);
        if (!user) reject(new Error('notFound'));
        resolve(user);
    });
};
const DelUserById = (userId: number): Promise<TUser> => {
    return new Promise((resolve, reject) => {
        const index = users.map(user => user.id).indexOf(userId);
        if (index === -1) return reject(new Error('notFound'));
        users.splice(index, 1);
        resolve();
    });
};
@JsonController('/sample')
export class SampleController extends BaseController {
    @Get()
    public async findAll(): Promise<TResponse<TUser[]>> {
        try {
            const users = await GetUsers();
            return this.success(users);
        } catch (e) {
            const error = {
                statusCode: 500,
                message: 'ServerInternal',
            };
            return this.error(error);
        }
    }
}
