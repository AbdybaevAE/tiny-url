import { THttpError } from '../../lib/errors';
export type TSuccessResponse<T> = {
    isSuccess: boolean;
    data: T;
};
export type TFailureResponse = {
    isSuccess: boolean;
    error: THttpError;
};
export type TResponse<T> = TSuccessResponse<T> | TFailureResponse;
export class BaseController {
    public success<T>(data: T): TSuccessResponse<T> {
        return {
            isSuccess: true,
            data,
        };
    }
    public error(error: THttpError): TFailureResponse {
        return {
            isSuccess: false,
            error,
        };
    }
}
