import React from "react";
import Body from "./components/layout/Body";
import Header from "./components/layout/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { GlobalStyle } from "./components/UI/GlobalStyles";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Body />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default App;
