import { prisma } from "../app";
import { Book, NewBook } from "../types";


export const createBook = async(newBook : NewBook):Promise<Book> => {
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

export const getAllBooks = async(): Promise<Book[]> => {
  try {
    const books: Book[] = await prisma.book.findMany();
    return books;
  } catch (error) {
    console.error("Error when getting all books: ", error);
    throw error;
  }
}

export const getBookById = async(id: number): Promise<Book> => {
  try {
    const book = prisma.book.findUnique({where: {id: id}, include:{author:true, category:true, editorial:true}});
    return book;
  } catch (error) {
    console.error(`Error when getting author id ${id}: `, error);
    throw error;
  }
}

export const updateBook = async(book: Book): Promise<Book> =>{
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

export const removeBook = async(id:number): Promise<Book> => {
  try {
    const removedBook = await prisma.book.delete({where:{id: id}});
    return removedBook;
  } catch (error) {
    console.error("Error when removing book: ", error);
    throw error;
  }
}

const updateQuantity = async (id: number, quantity: number): Promise<Book> => {
  try {
    const updatedQuantity = await prisma.book.update(
      {
        where:{id},
        data:{
          quantity: quantity
        }
      });
    return updatedQuantity as Book;
  } catch (error) {
    console.error("Error when updating quantity on book: ", error);
    throw error;
  }  
}

export const buyBook = async (id:number, quantityToBuy: number): Promise<Book> => {
  const book = await getBookById(id);
  if(book.quantity > quantityToBuy){
    const newQuantity = book.quantity - quantityToBuy;
    return await updateQuantity(id, newQuantity);
  }
  throw new Error("The number in stock is not enough to buy this book.");
}

export const updateStock = async (id:number, quantity: number): Promise<Book> => {
  if(quantity > 0){
    const book = await getBookById(id);
    const newQuantity = book.quantity + quantity;
    return await updateQuantity(id, newQuantity);
  }
  throw new Error("There is not valid amount to update the stock.");
}