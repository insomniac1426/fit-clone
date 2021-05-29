import React from "react";
import Body from "./components/layout/Body";
import Header from "./components/layout/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { GlobalStyle } from "./components/UI/GlobalStyles";
import { QueryClientProvider } from "react-query";
import { queryClient } from "Utils/ReactQuery";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Body />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
