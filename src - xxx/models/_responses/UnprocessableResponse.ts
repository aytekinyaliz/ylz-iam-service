// import { StatusCodes } from '../../libs/_constants';
// import { getEnumKeyOrValue } from '../../libs/_utilities';
// import HttpResponse from './HttpResponse';
// import { TData } from './IResponse';

// interface IUnprocessableResponseConstructor {
//    data?: TData;
//    message?: string;
// }

// export default class UnprocessableResponse extends HttpResponse {
//    constructor({
//       data = null,
//       message = getEnumKeyOrValue(StatusCodes, StatusCodes.UNPROCESSABLE)
//    }: IUnprocessableResponseConstructor) {
//       super({
//          code: StatusCodes.UNPROCESSABLE,
//          data,
//          message
//       });
//    }
// }
