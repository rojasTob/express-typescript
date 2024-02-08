import { NextFunction, Request, Response } from "express";
import { createBook, getAllBooks, updateBook, removeBook, getBookById, updateStock, buyBook} from "../services/BookService";
import { Book, NewBook } from "../types";
import { BadRequestException } from "../exceptions/BadRequestException";
import { NotFoundException } from "../exceptions/NotFoundException";

const requiredFields = [
  'title is required and must be a string', 
  'author is required' , 
  'cateogry is required', 
  'editorial is required',
  'isBestSeller is required and must be a boolean'
]

const create = async(req: Request, res: Response, next: NextFunction) => {
  try{
    const newBook = req.body as NewBook;
    const book = await createBook(newBook);
    res.status(201).json(book);
  }catch(error){
    next(new BadRequestException(error.name, requiredFields));
  }
}

const getAll = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const books: Book[] = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    next(new BadRequestException(error.name, []));
  }
}

const getById = async (req:Request, res:Response, next: NextFunction) => {
  try {
    const book = await getBookById(Number(req.params.id));
    if(!book){
      next(new NotFoundException("Book not found.", ["id not found in books"]));
    }else{
      res.status(200).json(book);
    }
  } catch (error) {
    next(new BadRequestException(error.name, []));
  }
}

const update = async(req: Request, res: Response, next: NextFunction) =>{
  try{
    const {id} = req.params;
    const bookInfo = req.body;
    const updatedBook = await updateBook({id, ...bookInfo});
    res.status(200).json(updatedBook);
  }catch(error){
    next(new BadRequestException(error.name, requiredFields));
  }
}

const remove = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const removedBook = await removeBook(Number(req.params.id));
    res.status(200).json(removedBook);
  } catch (error) {
    next(new NotFoundException(error.name, ["id to delete not found"]));
  }
}

const buy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const {quantityToBuy} = req.body;
    const updated = await buyBook(Number(id), quantityToBuy);
    res.status(200).json(updated);
  } catch (error) {
    next(new BadRequestException(error.message, ['id book is required', 'quantityToBuy is required']));
  }
}

const addStock = async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const {quantityToAdd} = req.body;
    const updated = await updateStock(Number(id), quantityToAdd);
    res.status(200).json(updated);
  } catch (error) {
    next(new BadRequestException(error.message, ['id book is required', 'quantityToAdd is required']));
  }
}

export default { create, getAll, update, remove, getById, buy, addStock };