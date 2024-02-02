export type Category = {
  id: number,
  name: string,
  books?: Book[]
}

export type Author = {
  id: number,
  fullname: string,
  biography?: string,
  image?: string,
  books?: Book[]
}

export type Editorial = {
  id: number,
  name: string,
  website?: string,
  books?: Book[]
}

export type Book = {
  id: number;
  title: string;
  authorId: number;
  editorialId: number;
  quantity: number;
  publicationDate: Date;
  categoryId: number;
  isBestSeller: boolean;
  image?: string;
}

export type NewBook = {
  title: string, 
  authorId: number, 
  editorialId: number,
  quantity: number, 
  publicationDate?: Date,
  categoryId: number,
  isBestSeller: boolean,
  image?: string
}