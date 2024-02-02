export type Category = {
  id: number,
  name: string
}

export type Author = {
  id: number,
  fullname: string,
  biography?: string,
  image?: string
}

export type Editorial = {
  id: number,
  name: string,
  website?: string
}