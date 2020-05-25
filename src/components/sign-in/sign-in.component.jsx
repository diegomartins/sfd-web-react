import React from "react";
import "./sign-in.styles.scss";
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

const SignIn = () => (
    <div className="sign-in">
        <h1>Sign In</h1>
        <p>
            Login using your email and password or your Facebook/Google account.
        </p>

        <EuiSpacer />

        <EuiForm name="sign-in">
            <EuiFormRow label="Email">
                <EuiFormControlLayout icon="email">
                    <EuiFieldText className="email" type="email" />
                </EuiFormControlLayout>
            </EuiFormRow>
            <EuiFormRow label="Password">
                <EuiFieldPassword />
            </EuiFormRow>

            <EuiSpacer />

            <EuiFormRow>
                <EuiFlexGroup direction="column" className="button-row">
                    <EuiButton
                        onClick={() => window.alert("Sign in button clicked")}
                        fill
                        type="submit"
                    >
                        Sign in
                    </EuiButton>

                    <SeparatorWithText>Or</SeparatorWithText>

                    <GoogleLogin
                        className="google-login-button"
                        render={() => (
                            <EuiButton iconType={GoogleLogo}>
                                Sign in with Google
                            </EuiButton>
                        )}
                    ></GoogleLogin>

                    <FacebookLogin
                        appId="1088597931155576"
                        callback={() => alert("Facebook callback")}
                        render={(renderProps) => (
                            <EuiButton iconType={FacebookLogo}>
                                Sign in with Facebook
                            </EuiButton>
                        )}
                    />
                </EuiFlexGroup>
            </EuiFormRow>
        </EuiForm>
    </div>
);

export default SignIn;
