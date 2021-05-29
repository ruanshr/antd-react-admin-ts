import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// import 'animate.css'
import "../styles/base.scss";
import "../styles/App.scss";

// 公共模块
const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/index" />} />
      <Route
        path="/500"
        component={React.lazy(() => import(/* webpackChunkName: '500' */ "../pages/Others/500"))}
      />
      <Route
        path="/login"
        component={React.lazy(() => import(/* webpackChunkName: 'login' */ "../pages/Login"))}
      />
      <Route
        path="/404"
        component={React.lazy(() => import(/* webpackChunkName: '404' */ "../pages/Others/404"))}
      />
      <Route component={React.lazy(() => import(/* webpackChunkName: 'default' */ "../layouts"))} />
    </Switch>
  </Router>
);

export default App;
