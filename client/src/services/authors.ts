import {AuthorData} from "../types";

const API_URL = "http://localhost:3001/api/author";

export const saveAuthor = async (authorData: AuthorData) => {
  try{
    const response = await fetch(API_URL + '/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(authorData)
    });

    if(!response.ok){
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  }catch(error){
    console.error('Author fecthing error: ', error);
  }
}

export const getAuthors = async () => {
  try{
    const response = await fetch(API_URL + '/getAll', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    });

    if(!response.ok){
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  }catch(error){
    console.error('Author fecthing error: ', error);
  }
}

