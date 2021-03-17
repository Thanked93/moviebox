import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Browse from "./pages/browse/Browse";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Profile} path="/profile" />
        <Route component={Browse} path="/browse" />
      </Switch>
    </Router>
  );
}

export default App;
