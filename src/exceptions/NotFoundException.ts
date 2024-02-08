import { HttpException } from "./HttpException";

export class NotFoundException extends HttpException{
  message: string;
  errors: string[];

  constructor(message: string, errors: string[]){
    super(message, 404, errors);
    this.message = message;
    this.errors = errors;
  }
}