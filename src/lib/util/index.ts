import moment from 'moment';

export const toNumber = (value: string): number => {
    return parseInt(value, 10);
};
export const toBoolean = (value: string): boolean => {
    return value === 'true';
};
export const getEnv = (key: string): string => {
    return process.env[key] || '';
};
export const InArray = <T>(items: T[], value: T): boolean => {
    return items.indexOf(value) !== -1;
};
export const IsNumber = (value: number): boolean => {
    return !isNaN(value);
};
export const IsEmptyString = (value: string): boolean => {
    return value == null || value == '';
};

export const GetDefaultExpireDateFromNow = (): Date => {
    return moment().add(24, 'months').toDate();
};

export const GetEarliestExpireDateFromNow = (): Date => {
    return moment().add(6, 'days').toDate();
};
