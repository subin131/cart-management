import React from "react";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
    <Route exact path="/Cart">
      <Cart />
      </Route>
      <Switch>
        <Route exact path="/Login">
      <Login/>
      </Route>
      <Route exact path="/Register">
      <Register/>
      </Route>
      </Switch>
    
    </Router>
  );
};

export default App;