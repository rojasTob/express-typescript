import { Request, Response } from "express";
import { createCategory, updateCategory, getAllCategories, removeCategory, getCategoryById} from "../services/CategoryService";
import { Category, NewCategory } from "../types";

const create = async(req: Request, res: Response) => {
  try{
    const newCategory = req.body as NewCategory;
    const category = await createCategory(newCategory);
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

const getById = async(req: Request, res: Response) => {
  try {
    const category = await getCategoryById(Number(req.params.id));
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const update = async(req: Request, res: Response) =>{
  try{
    const {id} = req.params;
    const categoryInfo = req.body;
    const updatedCategory = await updateCategory({id, ...categoryInfo});
    res.status(200).json(updatedCategory);
  }catch(error){
    res.status(500).json({error: error});
  }
}

const remove = async(req: Request, res: Response ) => {
  try {
    const removedCategory = await removeCategory(Number(req.params.id));
    res.status(200).json(removedCategory);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

export default { create, getAll, update, remove, getById};