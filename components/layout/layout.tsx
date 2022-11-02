import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar";
import Toast from "./toast";

const theme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.gray,
      secondary: baseTheme.colors.red,
      success: baseTheme.colors.green,
      error: baseTheme.colors.red,
      "sale.700": "#f4501e",
      "red.700": "#9e0c0c",
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <Toast />
      <Navbar />
      {children}
    </ChakraProvider>
  );
};

export default Layout;
