import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Account from "./pages/Account";
import Browse from "./pages/Browse";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Account} path="/account" />
        <Route component={Profile} path="/profile" />
        <Route component={Browse} path="/browse" />
      </Switch>
      <Home />
    </Router>
  );
}

export default App;
