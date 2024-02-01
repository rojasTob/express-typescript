import { prisma } from "../app";

type Author = {
  id: number,
  fullname: string,
  biography?: string,
  image?: string
}

export const createAuthor = async(fullname: string, biography?:string, image?:string) => {
  try{
      const author = await prisma.author.create({
      data: {
        fullname,
        biography,
        image
      }
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