import {Box, Flex, HStack, Link} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <Box bg="#f8f1f5" h="80px" alignContent={"center"} pl={10} pr={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack as="nav" spacing="24px">
          <Link as={NavLink} to="/">Home</Link>
          <Link as={NavLink} to="/authors">Authors</Link>
          <Link as={NavLink} to="/categories">Categories</Link>
          <Link as={NavLink} to="/books">Books</Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
