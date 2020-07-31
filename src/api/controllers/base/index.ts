type TError = {
    statusCode: number;
    message: string;
};
type TSuccessResponse<T> = {
    isSuccess: boolean;
    data: T;
};
type TFailureResponse = {
    isSuccess: boolean;
    error: TError;
};
export type TResponse<T> = TSuccessResponse<T> | TFailureResponse;
export class BaseController {
    public success<T>(data: T): TSuccessResponse<T> {
        return {
            isSuccess: true,
            data,
        };
    }
    public error(error: TError): TFailureResponse {
        return {
            isSuccess: false,
            error,
        };
    }
    // public validate()
}
