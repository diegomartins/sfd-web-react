import React from "react";
import "./sign-in-page.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import { EuiPanel } from "@elastic/eui";
import { withRouter } from "react-router-dom";

const SignInPage = ({ history }) => (
    <div className="sign-in-page">
        <SignIn />
        <EuiPanel
            className="create-account-panel"
            betaBadgeLabel="Create your account"
            onClick={() => history.push("/sign-up")}
        >
            Don't have an account yet? Create one here!
        </EuiPanel>
    </div>
);

export default withRouter(SignInPage);
