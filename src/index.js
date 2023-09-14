import React from "react";
import ReactDOM from "react-dom";
import App from "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Project from "./Project";
import Youtube from "./Youtube";
import Contact from "./Contact";
import Header from "./header";
import Footer from "./footer";

const routing = (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Project" component={Project} />
        <Route exact path="/Youtube" component={Youtube} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
