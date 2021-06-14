import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import BeatShare from "views/BeatShare/BeatShare";
import LeagueWorks from "views/LeagueWorks/LeagueWorks";
import Contact from "views/Contact/Contact";
import About from "views/About/About";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index}/>
      <Route path="/LeagueWorks" exact component={LeagueWorks}/>
      <Route path="/BeatShare" exact component={BeatShare}/>
      <Route path="/Contact" exact component={Contact}/>
      <Route path="/About" exact component={About}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
