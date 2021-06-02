/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
