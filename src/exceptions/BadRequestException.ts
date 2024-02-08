import { HttpException } from "./HttpException";

export class BadRequestException extends HttpException{
  message: string;
  errors: string[];

  constructor(message: string, errors: string[]){
    super(message, 400,errors);
    this.message = message;
    this.errors = errors;
  }
}