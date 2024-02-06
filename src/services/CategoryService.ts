import { prisma } from "../app";
import { Category, NewCategory } from "../types";

export const createCategory = async(newCategory: NewCategory): Promise<Category> => {
  try{
      const category = await prisma.category.create({
      data: { ...newCategory }
    });
    return category as Category;
  }catch(error){
    console.error("Error when creating category: ", error);
    throw error;
  }
}

export const getAllCategories = async(): Promise<Category[]>  => {
  try {
    const categorires: Category[] = await prisma.category.findMany();
    return categorires;
  } catch (error) {
    console.error("Error when getting all categories: ", error);
    throw error;
  }
}

export const getCategoryById = async(id: number): Promise<Category> => {
  try {
    const category = prisma.category.findUnique({where: {id: id}, include:{Book:true}});
    return category;
  } catch (error) {
    console.error(`Error when getting editorial id ${id}: `, error);
    throw error;
  }
}

export const updateCategory = async(cateogry: Category): Promise<Category> =>{
  try{
    const {id, name} = cateogry;
    const updatedCategory = await prisma.category.update({
      where: {
        id: Number(id)
      },
      data:{name}
    });
    return updatedCategory;
  }catch(error){
    console.error("Error when updating category: ", error);
    throw error;
  }
}

export const removeCategory = async(id: number): Promise<Category>  => {
  try {
    const removedCategory = await prisma.category.delete({
      where: {
        id: Number(id),
      }
    });
    return removedCategory;
  } catch (error) {
    console.error("Error when removing category: ", error);
    throw error;
  }
}