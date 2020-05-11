import React from "react";
import { Link } from "react-router-dom";

const UserMenu = () => (
    <div className="user-menu">
        <Link to="/sign-in">Login</Link>
    </div>
);

export default UserMenu;
