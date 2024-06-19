import React, {useState} from "react";
import {Box, Heading, Input, Button, useToast} from "@chakra-ui/react";

const Authors = () => {
  const [authorData, setAuthorData] = useState({fullname: '', biography: '', image: ''});
  const toast = useToast();

  const handleChange = (event: React.ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setAuthorData({
      ...authorData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try{
      const response = await fetch('http://localhost:3001/api/author/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(authorData)
      });

      if(!response.ok){
        toast({
          title: 'Author form not submitted',
          description: 'Unable to save',
          status: 'error',
          duration: 5000,
          isClosable: true
        });
        throw new Error('Response not ok');
      }

      toast({
        title: 'Author form submitted',
        description: 'Author saved',
        status: 'success',
        duration: 5000,
        isClosable: true
      });

      setAuthorData({fullname: '', biography: '', image: ''});
    }catch(error){
      console.error('Author form not submitted');
      toast({
        title: 'Author form not submitted',
        description: 'Unable to save',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }
  };

  return (
    <Box  pl={10} pr={10}>
      <Heading>Authors page</Heading>
      <form className="form" onSubmit={handleSubmit}>
        <Input className="input-field" placeholder="Fullname" isRequired={true} name="fullname" value={authorData.fullname} onChange={handleChange}/>
        <Input className="input-field" placeholder="Biography" isRequired={true} name="biography" value={authorData.biography} onChange={handleChange}/>
        <Input className="input-field" placeholder="URL image" name="iamge" value={authorData.image} onChange={handleChange}/>
        <Button className="btn-1" type="submit">Add</Button>
      </form>
    </Box>
  );
};

export default Authors;
