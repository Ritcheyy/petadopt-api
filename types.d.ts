declare namespace Express {
  export interface Response {
    handleResponse: (status: number, message: string, data?: any) => void
  }
}