export class HttpException extends Error {
  message: string;
  statusCode: number;
  errors: string[];

  constructor(message:string, statusCode: number, errors: string[]){
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}
