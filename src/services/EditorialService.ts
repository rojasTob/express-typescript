import { prisma } from "../app";
import { Editorial } from "../types";

export const createEditorial = async(name: string, website?: string) => {
  try{
      const editorial = await prisma.editorial.create({
      data: { name, website }
    });
    return editorial as Editorial;
  }catch(error){
    console.error("Error when creating editorial: ", error);
    throw error;
  }
}

export const getAllEditorials = async() => {
  try {
    const editorials: Editorial[] = await prisma.editorial.findMany();
    return editorials;
  } catch (error) {
    console.error("Error when getting all editorials: ", error);
    throw error;
  }
}

export const updateEditorial = async(editorial: Editorial)=>{
  try{
    const {id, name, website} = editorial;
    const updatedEditorial = await prisma.editorial.update({
      where: {
        id: Number(id)
      },
      data:{name, website}
    });
    return updatedEditorial;
  }catch(error){
    console.error("Error when updating editorial: ", error);
    throw error;
  }
}

export const removeEditorial = async(id: number) => {
  try {
    const removedEditorial = await prisma.editorial.delete({
      where: {
        id: Number(id),
      }
    });
    return removedEditorial;
  } catch (error) {
    console.error("Error when removing editorial: ", error);
    throw error;
  }
}