import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    transparent: "transparent",
    black: {
      500: "#010100",
    },
    white: {
      500: "#fffefe",
    },
    green: {
      500: "#50e902",
    },
  },
});
