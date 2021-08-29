import React from "react";
//pages & components
import Home from "./pages/Home";
import Nav from "./components/Nav";
//styles
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <ReactApp>
      <GlobalStyles />
      <Nav />
      <Home />
    </ReactApp>
  );
}

const ReactApp = styled.div``;

export default App;
