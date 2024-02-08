import { NextFunction, Request, Response } from "express";
import { createCategory, updateCategory, getAllCategories, removeCategory, getCategoryById} from "../services/CategoryService";
import { Category, NewCategory } from "../types";
import { BadRequestException } from "../exceptions/BadRequestException";
import { NotFoundException } from "../exceptions/NotFoundException";

const create = async(req: Request, res: Response, next: NextFunction) => {
  try{
    const newCategory = req.body as NewCategory;
    const category = await createCategory(newCategory);
    res.status(201).json(category);
  }catch(error){
    next(new BadRequestException(error.name, ['name is required and must be a string']));
  }
}

const getAll = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const categories: Category[] = await getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(new BadRequestException(error.name, []));
  }
}

const getById = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const category = await getCategoryById(Number(req.params.id));
    if(!category){
      next(new NotFoundException("Category not found.", ["id not found in categories"]));
    }else{
      res.status(200).json();
    }
  }catch (error) {
    next(new BadRequestException(error.name, []));
  }
}

const update = async(req: Request, res: Response, next: NextFunction) =>{
  try{
    const {id} = req.params;
    const categoryInfo = req.body;
    const updatedCategory = await updateCategory({id, ...categoryInfo});
    res.status(200).json(updatedCategory);
  }catch(error){
    next(new BadRequestException(error.name, ['name is required and must be a string']));
  }
}

const remove = async(req: Request, res: Response, next: NextFunction ) => {
  try {
    const removedCategory = await removeCategory(Number(req.params.id));
    res.status(200).json(removedCategory);
  } catch (error) {
    next(new NotFoundException(error.name, ["id to delete not found"]));
  }
}

export default { create, getAll, update, remove, getById};