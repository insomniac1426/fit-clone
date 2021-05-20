import React from "react";
import Body from "./components/layout/Body";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Header />
      <Body />
      <Footer /> 
    </ div>
    );
  }
}

export default App;
