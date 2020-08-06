export const environmentsError = new Error('Check environment variable');
export type THttpError = {
    statusCode: number;
    name: string;
    message?: string;
};
export const HttpInvalidBody: THttpError = {
    statusCode: 400,
    name: 'InvalidBodyError',
};
