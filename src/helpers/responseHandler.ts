import { NextFunction, Request, Response } from "express"

type ResponseDataType = Record<string, any> | any[]

/*export interface CustomResponse extends Response {
  handleResponse: (status: number, message: string, data?: ResponseDataType) => void
}*/

const responseHandler = (req: Request, res: Response, next: NextFunction): void => {
  res.handleResponse = (
    statusCode: number,
    message: string,
    data?: ResponseDataType,
  ): any => {
    if (statusCode >= 400) {
      // An Error
      return res.status(statusCode).send({ status: statusCode, message, error: data })
    }

    return res.status(statusCode).send({ status: statusCode, message, data })
  }

  next()
}

export default responseHandler
