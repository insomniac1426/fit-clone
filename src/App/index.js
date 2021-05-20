import React from "react";
import Body from "./components/layout/Body";
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
      </div>
    );
  }
}

export default App;
