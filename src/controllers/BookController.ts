import { Request, Response } from "express";
import { createBook, getAllBooks, updateBook} from "../services/BookService";
import { Book, NewBook } from "../types";

const create = async(req: Request, res: Response) => {
  try{
    const newBook = req.body as NewBook;
    const book = await createBook(newBook);
    res.status(200).json(book);
  }catch(error){
    res.status(500).json({error: error});
  }
}

const getAll = async(req: Request, res: Response) => {
  try {
    const books: Book[] = await getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const update = async(req: Request, res: Response) =>{
  try{
    const book = req.body as Book;
    const updatedBook = await updateBook(book);
    res.status(200).json(updatedBook);
  }catch(error){
    res.status(500).json({error: error});
  }
}

export default { create, getAll, update };