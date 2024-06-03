import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body:{
        fontFamily: "body",
        color: "gray.800",
        bg: "gray.100",
        lineHeight: "base",
      },
    },
  },
});

export default theme;