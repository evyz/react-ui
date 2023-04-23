import React from "react";
import "./wrapper.css";

const Wrapper = ({ children, isDarkMode }) => {
  return (
    <div
      className={"system_wrapper " + `${isDarkMode ? "system_mode-dark" : ""}`}
    >
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
