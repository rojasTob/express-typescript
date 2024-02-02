type Identifier = {
  id: number;
}

export type NewCategory = {
  name: string;
  books?: Book[];
}

export type Category = Identifier & NewCategory;

export type NewAuthor = {
  fullname: string;
  biography?: string;
  image?: string;
  books?: Book[];
}

export type Author = Identifier & NewAuthor;

export type NewEditorial = {
  name: string,
  website?: string,
  books?: Book[]
}

export type Editorial = Identifier & NewEditorial;

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

export type Book = Identifier & NewBook;
