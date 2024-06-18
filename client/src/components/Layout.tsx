import React, {ReactNode} from "react";
import {Box, Container, Flex} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return(
    <Flex direction='column' minH='100vh'>
      <Header/>
      <Container maxW="container.xl" mt={4} mb={4}>
        {children}
      </Container>
      <Footer/>
    </Flex>
  );
};

export default Layout;
