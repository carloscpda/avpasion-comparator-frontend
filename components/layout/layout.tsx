import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar";

const theme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.gray,
      secondary: baseTheme.colors.red,
      success: baseTheme.colors.green,
      error: baseTheme.colors.red,
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {children}
    </ChakraProvider>
  );
};

export default Layout;
