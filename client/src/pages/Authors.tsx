import React, {useState, useEffect} from "react";
import {Flex, Box, Heading, Input, Button, useToast, TableContainer, Table, Thead, Tbody, Th, Tr, Td} from "@chakra-ui/react";
import {saveAuthor, getAuthors} from "../services/authors";
import { AuthorData } from "../types";
import { getAllByTestId } from "@testing-library/react";

const Authors = () => {
  const [authorData, setAuthorData] = useState({fullname: '', biography: '', image: ''});
  const [authors, setAuthors] = useState(Array<AuthorData>);
  const toast = useToast();

  const getAuthorsList = async() => {
    try{
      const response = await getAuthors();
      setAuthors(response);
    }catch(error){
      console.error('Can not get authors list');
      toast({
        title: 'Authors list error',
        description: 'Unable to get the authors list',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }
  }

  useEffect(() => {
    getAuthorsList();
  }, []);

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
      const response = await saveAuthor(authorData);

      toast({
        title: `Author ${response.fullname} was saved.`,
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
    <Flex direction={"column"}>
      <Box mt={4} mb={4}>
        <Heading>Authors page</Heading>
        <form className="form" onSubmit={handleSubmit}>
          <Input className="input-field" placeholder="Fullname" isRequired={true} name="fullname" value={authorData.fullname} onChange={handleChange}/>
          <Input className="input-field" placeholder="Biography" isRequired={true} name="biography" value={authorData.biography} onChange={handleChange}/>
          <Input className="input-field" placeholder="URL image" name="image" value={authorData.image} onChange={handleChange}/>
          <Button className="btn-1" type="submit">Add</Button>
        </form>
      </Box>
      <Box mt={4} mb={4}>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Author</Th>
                <Th>Options</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                authors.map( author => (
                  <Tr>
                    <Td>{author.fullname}</Td>
                    <Td>Edit | Remove</Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};

export default Authors;
