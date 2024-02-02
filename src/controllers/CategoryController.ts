import { Request, Response } from "express";
import { createCategory, updateCategory, getAllCategories, removeCategory} from "../services/CategoryService";
import { Category } from "../types";

const create = async(req: Request, res: Response) => {
  try{
    const {name} = req.body;
    const category = await createCategory(name);
    res.status(200).json(category);
  }catch(error){
    res.status(500).json({error: error});
  }
}

const getAll = async(req: Request, res: Response) => {
  try {
    const categories: Category[] = await getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const update = async(req: Request, res: Response) =>{
  try{
    const category = req.body as Category;
    const updatedCategory = await updateCategory(category);
    res.status(200).json(updatedCategory);
  }catch(error){
    res.status(500).json({error: error});
  }
}

const remove = async(req: Request, res: Response ) => {
  try {
    const id = req.body.id;
    const removedCategory = await removeCategory(id);
    res.status(200).json(removedCategory);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

export default { create, getAll, update, remove};