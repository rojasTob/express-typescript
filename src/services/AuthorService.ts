import { prisma } from "../app";
import {Author, NewAuthor} from "../types";

export const createAuthor = async(newAuthor: NewAuthor) => {
  try{
      const author = await prisma.author.create({
      data: {...newAuthor}
    });
    return author as Author;
  }catch(error){
    console.error("Error when creating author: ", error);
    throw error;
  }
}

export const getAllAuthors = async() => {
  try {
    const authors: Author[] = await prisma.author.findMany();
    return authors;
  } catch (error) {
    console.error("Error when getting all authors: ", error);
    throw error;
  }
}

export const getAuthorById = async(id: number) => {
  try {
    const author = prisma.author.findUnique({where: {id: id}, include:{Book:true}});
    return author;
  } catch (error) {
    console.error(`Error when getting author id ${id}: `, error);
    throw error;
  }
}

export const updateAuthor = async(author: Author)=>{
  try{
    const {id, fullname, biography, image} = author;
    const updatedAuthor = await prisma.author.update({
      where: {
        id: Number(id)
      },
      data:{
        fullname,
        biography,
        image
      }
    });
    return updatedAuthor;
  }catch(error){
    console.error("Error when updating author: ", error);
    throw error;
  }
}

export const removeAuthor = async(id: number) => {
  try {
    const removedAuthor = await prisma.author.delete({
      where: {
        id: Number(id),
      }
    });
    return removedAuthor;
  } catch (error) {
    console.error("Error when removing author: ", error);
    throw error;
  }
}