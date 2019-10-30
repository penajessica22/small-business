import React from "react";
import { Switch, Route } from 'react-router'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import cookie from 'cookie'

import {Redirect} from 'react-router-dom'

// const checkAuth = () => {
//     // const cookies = cookie.parse(document.cookie= "user=<USERNAME>;max-age=60*1000*5)"
//     return cookies["loggedIn"] ? true : false;
//   };

//   const ProtectedRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         checkAuth() === true ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );

const Router = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Router;
