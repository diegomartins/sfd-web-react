import React from "react";
import "./App.scss";
import PublicHome from "./pages/public-home/public-home.component";
import Header from "./components/header/header.component";
import { Route, Switch, Redirect } from "react-router-dom";
import SignInOrSignUp from "./pages/sign-in-or-sign-up/sign-in-or-sign-up.component";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <Switch>
                    <Route
                        exact
                        component={SignInOrSignUp}
                        path="/sign-in"
                    ></Route>
                    <Route exact component={PublicHome} path="/public"></Route>
                    <Route path="/">
                        <Redirect to="/public" />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
