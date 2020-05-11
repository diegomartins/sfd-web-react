import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/logos/sfd-logo-green-yellow.svg";
import {
    EuiHeader,
    EuiHeaderSection,
    EuiHeaderSectionItem,
} from "@elastic/eui";
import UserMenu from "../user-menu/user-menu.component";
import { Link } from "react-router-dom";

const Header = () => (
    <EuiHeader className="header-container" position="fixed">
        <EuiHeaderSection grow={false} className="logo-section">
            <EuiHeaderSectionItem border="none">
                <Link to="/">
                    <Logo className="logo" />
                </Link>
            </EuiHeaderSectionItem>
        </EuiHeaderSection>
        <EuiHeaderSection grow={true} className="text-section">
            <EuiHeaderSectionItem border="none">
                <h1>Sydney Forro Dance</h1>
            </EuiHeaderSectionItem>
        </EuiHeaderSection>
        <EuiHeaderSection side="right">
            <EuiHeaderSectionItem border="none">
                <UserMenu />
            </EuiHeaderSectionItem>
        </EuiHeaderSection>
    </EuiHeader>
);

export default Header;
