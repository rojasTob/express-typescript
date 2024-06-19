const API_URL = "http://localhost:3001/api/";

interface AuthorData {
  fullname: string;
  biography: string;
  image: string;
}

export const saveAuthor = async (authorData: AuthorData) => {
  try{
    const response = await fetch(API_URL + 'author/create', {
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

