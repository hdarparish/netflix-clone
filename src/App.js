import React from "react";
//pages & components
import Home from "./pages/Home";
import Nav from "./components/Nav";
//styles
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
//Router
import { Route } from "react-router-dom";

function App() {
  return (
    <ReactApp>
      <GlobalStyles />
      <Nav />
      <Route path={["/movie/:id", "/"]}>
        <Home />
      </Route>
    </ReactApp>
  );
}

const ReactApp = styled.div``;

export default App;
