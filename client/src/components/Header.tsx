import {Box, Center, Flex, HStack, Link} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack as="nav" spacing={4}>
          <Link as={NavLink} to="/">Home</Link>
          <Link as={NavLink} to="/authors">Authors</Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
