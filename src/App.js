import React from "react";
import "./App.scss";
import Header from "./components/header/header.component";
import { Route, Switch, Redirect } from "react-router-dom";
import PublicHomePage from "./pages/public-home/public-home-page.component";
import SignInPage from "./pages/sign-in/sign-in-page.component";
import SignUpPage from "./pages/sign-up/sign-up-page.component";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <Switch>
                    <Route exact component={SignInPage} path="/sign-in"></Route>
                    <Route exact component={SignUpPage} path="/sign-up"></Route>
                    <Route
                        exact
                        component={PublicHomePage}
                        path="/public"
                    ></Route>
                    <Route path="/">
                        <Redirect to="/public" />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
