import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sign from "containers/Sign/Loadable";

export default () => (
  <Router>
    <Switch>
      <Route path="/sign" exact component={Sign} />
    </Switch>
  </Router>
);
