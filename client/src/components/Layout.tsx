import React, {ReactNode} from "react";
import {Box, Container} from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return(
    <Box>
      <Header/>
      <Container maxW="container.xl" mt={4}>
        {children}
      </Container>
      <Footer/>
    </Box>
  );
};

export default Layout;
