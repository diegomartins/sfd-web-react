import React from "react";
import "./separator-with-text.styles.scss";

const SeparatorWithText = ({ children, uppercase = true }) => (
    <div className={`separator-with-text ${uppercase ? "uppercase" : ""}`}>
        {children}
    </div>
);

export default SeparatorWithText;
