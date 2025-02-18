import React from "react";
import {Router, Route, Switch, Link, NavLink} from "react-router-dom";
import DashboardPage from "./../components/DashboardPage";
import NotFoundPage from "./../components/NotFoundPage";
import LoginPage from "./../components/LoginPage";
import {createBrowserHistory} from "history";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () =>(
    <Router history={history}>
        <div>
            <Switch> 
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <Route component={NotFoundPage}/>
            </Switch>  
        </div>
    </Router>
);

export default AppRouter;