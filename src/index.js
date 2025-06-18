import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import App from "./App";
import MyContacts from "./components/MyContacts";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

const customHistory = createBrowserHistory({
  // basename: config.urlBasename || ""
});

ReactDOM.render(
  <Router history={customHistory}>
    <Switch>
      <Route
        exact
        path="/"
        component={({ history }) => {
          window.appHistory = history;
          return <App />;
        }}
      />
      <Route exact path="/my-contacts">
        <MyContacts />
      </Route>
      <Route exact path="/about-me">
        <AboutMe />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
