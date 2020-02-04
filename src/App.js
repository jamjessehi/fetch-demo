import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sign from "containers/Sign/Loadable";
import User from "containers/User/Loadable";
import Login from "containers/Login/Loadable";

export default () => (
  <Router>
    <Switch>
      <Route path="/sign" exact component={Sign} />
      <Route path="/login" exact component={Login} />
      <Route path="/user" exact component={User} />
    </Switch>
  </Router>
);
