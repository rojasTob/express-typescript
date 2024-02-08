import { NextFunction, Request, Response } from "express";
import { createEditorial, updateEditorial, removeEditorial, getAllEditorials, getEditorialById} from "../services/EditorialService";
import { Editorial, NewEditorial } from "../types";
import { BadRequestException } from "../exceptions/BadRequestException";
import { NotFoundException } from "../exceptions/NotFoundException";

const create = async(req: Request, res: Response, next: NextFunction) => {
  try{
    const newEditorial = req.body as NewEditorial;
    const editorial = await createEditorial(newEditorial);
    res.status(201).json(editorial);
  }catch(error){
    next(new BadRequestException(error.name, ['name is required and must be a string']));
  }
}

const getAll = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const editorials: Editorial[] = await getAllEditorials();
    res.status(200).json(editorials);
  } catch (error) {
    next(new BadRequestException(error.name, []));
  }
}

const getById = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const editorial: Editorial = await getEditorialById(Number(req.params.id));
    if(!editorial){
      next(new NotFoundException("Editorial not found.", ["id not found in editorials"]))
    }else{
      res.status(200).json(editorial);
    }
  } catch (error) {
    next(new BadRequestException(error.name, []));
  }
}

const update = async(req: Request, res: Response, next: NextFunction) =>{
  try{
    const {id} = req.params;
    const editorialInfo = req.body;
    const updatedEditorial = await updateEditorial({id, ...editorialInfo});
    res.status(200).json(updatedEditorial);
  }catch(error){
    next(new BadRequestException(error.name, ['name is required and must be a string']));
  }
}

const remove = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const removedEditorial = await removeEditorial(Number(req.params.id));
    res.status(200).json(removedEditorial);
  } catch (error) {
    next(new NotFoundException(error.name, ["id to delete not found"]));
  }
}

export default { create, getAll, update, remove, getById};