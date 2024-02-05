import { Request, Response } from "express";
import { createBook, getAllBooks, updateBook, removeBook, getBookById, updateStock, buyBook} from "../services/BookService";
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

const getById = async (req:Request, res:Response) => {
  try {
    const book = await getBookById(Number(req.params.id));
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const update = async(req: Request, res: Response) =>{
  try{
    const {id} = req.params;
    const bookInfo = req.body;
    const updatedBook = await updateBook({id, ...bookInfo});
    res.status(200).json(updatedBook);
  }catch(error){
    res.status(500).json({error: error});
  }
}

const remove = async(req: Request, res: Response) => {
  try {
    const removedBook = await removeBook(Number(req.params.id));
    res.status(200).json(removedBook);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const buy = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const {quantityToBuy} = req.body;
    const updated = await buyBook(Number(id), quantityToBuy);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const addStock = async (req:Request, res:Response) => {
  try {
    const {id} = req.params;
    const {quantityToAdd} = req.body;
    const updated = await updateStock(Number(id), quantityToAdd);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

export default { create, getAll, update, remove, getById, buy, addStock };