import {Box, Heading, Input, Button} from "@chakra-ui/react";

const Categories = () => {
  return (
    <Box  pl={10} pr={10}>
      <Heading>Categories page</Heading>
      <form className="form">
        <Input className="input-field" placeholder="Name" isRequired={true}/>
        <Button className="btn-1" type="submit">Add</Button>
      </form>
    </Box>
  );
};

export default Categories;
