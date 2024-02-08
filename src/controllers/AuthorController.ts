import { NextFunction, Request, Response } from "express";
import { createAuthor, updateAuthor, getAllAuthors, removeAuthor, getAuthorById} from "../services/AuthorService";
import { Author, NewAuthor } from "../types";
import { BadRequestException } from "../exceptions/BadRequestException";
import { NotFoundException } from "../exceptions/NotFoundException";


const create = async(req: Request, res: Response, next: NextFunction) => {
  try{
    const newAuthor = req.body as NewAuthor;
    const author = await createAuthor(newAuthor);
    res.status(201).json(author);
  }catch(error){
    next(new BadRequestException(error.name, ['fullname is required and must be a string']));
  }
}

const getAll = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const authors: Author[] = await getAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    next(new BadRequestException(error.name, []));
  }
}

const getById = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const author: Author = await getAuthorById(Number(req.params.id));
    if(!author){
      next(new NotFoundException("Author not found.", ["id not found in authors"]))
    }else{
      res.status(200).json(author);
    }
  } catch (error) {
    next(new BadRequestException(error.name, []));
  }
}

const update = async(req: Request, res: Response, next: NextFunction) =>{
  try{
    const {id} = req.params;
    const authorInfo = req.body;
    const updatedAuthor = await updateAuthor({id, ...authorInfo});
    res.status(200).json(updatedAuthor);
  }catch(error){
    next(new BadRequestException(error.name, ['fullname is required and must be a string']));
  }
}

const remove = async(req: Request, res: Response, next: NextFunction ) => {
  try {
    const removedAuthor = await removeAuthor(Number(req.params.id));
    res.status(200).json(removedAuthor);
  } catch (error) {
    next(new NotFoundException(error.name, ["id to delete not found"]));
  }
}

export default { create, getAll, update, remove, getById };