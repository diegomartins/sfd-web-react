import React from "react";
import "./sign-in-or-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { EuiFlexGroup } from "@elastic/eui";
import { EuiFlexItem } from "@elastic/eui";

const SignInOrSignUp = () => (
    <div className="sign-in-or-sign-up">
        <EuiFlexGroup>
            <EuiFlexItem>
                <SignIn />
            </EuiFlexItem>
            <EuiFlexItem>
                <SignUp />
            </EuiFlexItem>
        </EuiFlexGroup>
    </div>
);

export default SignInOrSignUp;
