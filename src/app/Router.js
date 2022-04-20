import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

function Router() {

    return (<BrowserRouter>
        <Switch>
            <Route path={`/user?userid=:user_id`}>

            </Route>
        </Switch>
    </BrowserRouter>)
}