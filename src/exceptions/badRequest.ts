import { HttpException } from "./httpException";

export class BadRequestException extends HttpException{
  message: string;
  errors: any;

  constructor(message: string, errors: any){
    super(message, 400,errors);
    this.message = message;
    this.errors = errors;
  }
}