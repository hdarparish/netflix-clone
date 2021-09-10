import React from "react";
//pages & components
import Home from "./pages/Home";
import Nav from "./components/Nav";
//styles
import "./styles/app.scss";
//Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path={["/movie/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
