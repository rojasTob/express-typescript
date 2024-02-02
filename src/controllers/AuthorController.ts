import { Request, Response } from "express";
import { createAuthor, updateAuthor, getAllAuthors, removeAuthor, getAuthorById} from "../services/AuthorService";
import { Author, NewAuthor } from "../types";


const create = async(req: Request, res: Response) => {
  try{
    const newAuthor = req.body as NewAuthor;
    const author = await createAuthor(newAuthor);
    res.status(200).json(author);
  }catch(error){
    res.status(500).json({error: error});
  }
}

const getAll = async(req: Request, res: Response) => {
  try {
    const authors: Author[] = await getAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const getById = async(req: Request, res: Response) => {
  try {
    const author: Author = await getAuthorById(Number(req.body.id));
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const update = async(req: Request, res: Response) =>{
  try{
    const author = req.body as Author;
    const updatedAuthor = await updateAuthor(author);
    res.status(200).json(updatedAuthor);
  }catch(error){
    res.status(500).json({error: error});
  }
}

const remove = async(req: Request, res: Response ) => {
  try {
    const id = req.body.id;
    const removedAuthor = await removeAuthor(id);
    res.status(200).json(removedAuthor);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

export default { create, getAll, update, remove, getById };