import 'reflect-metadata';
import { error } from './api/lib/logger';
export const hello = (): void => {
    console.log('world');
};
hello();

const a = '1';
error('dsadas');
error('dsadas', '123213');
