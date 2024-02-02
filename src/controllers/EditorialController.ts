import { Request, Response } from "express";
import { createEditorial, updateEditorial, removeEditorial, getAllEditorials, getEditorialById} from "../services/EditorialService";
import { Editorial } from "../types";

const create = async(req: Request, res: Response) => {
  try{
    const {name, website} = req.body;
    const editorial = await createEditorial(name, website);
    res.status(200).json(editorial);
  }catch(error){
    res.status(500).json({error: error});
  }
}

const getAll = async(req: Request, res: Response) => {
  try {
    const editorials: Editorial[] = await getAllEditorials();
    res.status(200).json(editorials);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const getById = async(req: Request, res: Response) => {
  try {
    const editorial: Editorial = await getEditorialById(Number(req.body.id));
    res.status(200).json(editorial);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const update = async(req: Request, res: Response) =>{
  try{
    const editorial = req.body as Editorial;
    const updatedEditorial = await updateEditorial(editorial);
    res.status(200).json(updatedEditorial);
  }catch(error){
    res.status(500).json({error: error});
  }
}

const remove = async(req: Request, res: Response ) => {
  try {
    const id = req.body.id;
    const removedEditorial = await removeEditorial(id);
    res.status(200).json(removedEditorial);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

export default { create, getAll, update, remove, getById};