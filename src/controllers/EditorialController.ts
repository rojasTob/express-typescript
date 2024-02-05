import { Request, Response } from "express";
import { createEditorial, updateEditorial, removeEditorial, getAllEditorials, getEditorialById} from "../services/EditorialService";
import { Editorial, NewEditorial } from "../types";

const create = async(req: Request, res: Response) => {
  try{
    const newEditorial = req.body as NewEditorial;
    const editorial = await createEditorial(newEditorial);
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
    const editorial: Editorial = await getEditorialById(Number(req.params.id));
    res.status(200).json(editorial);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

const update = async(req: Request, res: Response) =>{
  try{
    const {id} = req.params;
    const editorialInfo = req.body;
    const updatedEditorial = await updateEditorial({id, ...editorialInfo});
    res.status(200).json(updatedEditorial);
  }catch(error){
    res.status(500).json({error: error});
  }
}

const remove = async(req: Request, res: Response ) => {
  try {
    const removedEditorial = await removeEditorial(Number(req.params.id));
    res.status(200).json(removedEditorial);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

export default { create, getAll, update, remove, getById};