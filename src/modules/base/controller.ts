import { THttpError } from '../../lib/errors';
import { JoiObject, ObjectSchema, ValidationResult } from 'joi';
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
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public validate<T>(schema: ObjectSchema, value: T): ValidationResult<T> {
        return schema.validate(value, {
            stripUnknown: true,
        });
    }
}
