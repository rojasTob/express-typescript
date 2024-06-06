import {Box, Heading, Input, Button} from "@chakra-ui/react";

const Authors = () => {
  return (
    <Box  pl={10} pr={10}>
      <Heading>Authors page</Heading>
      <form className="form">
        <Input className="input-field" placeholder="Fullname" isRequired={true}/>
        <Input className="input-field" placeholder="Biography" isRequired={true}/>
        <Input className="input-field" placeholder="URL image" />
        <Button className="btn-1" type="submit">Add</Button>
      </form>
    </Box>
  );
};

export default Authors;
