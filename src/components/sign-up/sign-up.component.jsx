import React from "react";
import "./sign-up.styles.scss";
import { EuiForm, EuiFieldText, EuiFormRow } from "@elastic/eui";
import { EuiFieldPassword } from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";
import { EuiButton } from "@elastic/eui";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { EuiFlexGroup } from "@elastic/eui";
import SeparatorWithText from "../separator-with-text/separator-with-text.component";
import { EuiFormControlLayout } from "@elastic/eui";

import { ReactComponent as GoogleLogo } from "../../assets/images/3rd-party/google.svg";
import { ReactComponent as FacebookLogo } from "../../assets/images/3rd-party/facebook.svg";
import { EuiFlexItem } from "@elastic/eui";

const SignUp = () => (
    <div className="sign-up">
        <h1>Create a new account</h1>
        <p>Don't have an account yet? Let's create one.</p>

        <EuiSpacer />

        <EuiFlexGroup>
            <EuiFlexItem>
                <GoogleLogin
                    className="google-login-button"
                    render={() => (
                        <EuiButton iconType={GoogleLogo}>
                            Sign up with Google
                        </EuiButton>
                    )}
                ></GoogleLogin>
            </EuiFlexItem>
            <EuiFlexItem>
                <FacebookLogin
                    appId="1088597931155576"
                    callback={() => alert("Facebook callback")}
                    render={(renderProps) => (
                        <EuiButton iconType={FacebookLogo}>
                            Sign up with Facebook
                        </EuiButton>
                    )}
                />
            </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer />

        <SeparatorWithText uppercase={false}>
            Or fill in the form below
        </SeparatorWithText>

        <EuiForm name="sign-up">
            <EuiFormRow label="Name">
                <EuiFormControlLayout>
                    <EuiFieldText />
                </EuiFormControlLayout>
            </EuiFormRow>

            <EuiFormRow label="Email">
                <EuiFormControlLayout icon="email">
                    <EuiFieldText className="email" type="email" />
                </EuiFormControlLayout>
            </EuiFormRow>
            <EuiFormRow label="Password">
                <EuiFieldPassword />
            </EuiFormRow>
            <EuiFormRow label="Confirm Password">
                <EuiFieldPassword />
            </EuiFormRow>

            <EuiSpacer />

            <EuiFormRow>
                <EuiFlexGroup direction="column" className="button-row">
                    <EuiButton
                        onClick={() => window.alert("Sign up button clicked")}
                        fill
                        type="submit"
                    >
                        Sign up
                    </EuiButton>
                </EuiFlexGroup>
            </EuiFormRow>
        </EuiForm>
    </div>
);

export default SignUp;
