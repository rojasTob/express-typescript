import { prisma } from "../app";
import { Book, NewBook } from "../types";


export const createBook = async(newBook : NewBook) => {
  try{
      const book = await prisma.book.create({
      data: { ...newBook }
    });
    return book as Book;
  }catch(error){
    console.error("Error when creating book: ", error);
    throw error;
  }
}

export const getAllBooks = async() => {
  try {
    const books: Book[] = await prisma.book.findMany();
    return books;
  } catch (error) {
    console.error("Error when getting all books: ", error);
    throw error;
  }
}

export const updateBook = async(book: Book)=>{
  try{
    const {id, title, authorId, editorialId, publicationDate,categoryId, isBestSeller, image} = book;
    const updatedBook = await prisma.book.update({
      where: {
        id: Number(id)
      },
      data:{
        title,
        authorId,
        editorialId,
        publicationDate,
        categoryId,
        isBestSeller,
        image
      }
    });
    return updatedBook;
  }catch(error){
    console.error("Error when updating book: ", error);
    throw error;
  }
}

export const removeBook = async(id:number) => {
  try {
    const removedBook = await prisma.book.delete({where:{id: id}});
    return removedBook;
  } catch (error) {
    console.error("Error when removing book: ", error);
    throw error;
  }
}