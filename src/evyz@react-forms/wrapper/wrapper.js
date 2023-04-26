import React, { createContext } from "react";
import "./wrapper.css";

const Wrapper = ({ children, isDarkMode, useCoreConsole }) => {
  return (
    <div className={`system_wrapper  ${isDarkMode ? "system_mode-dark" : ""}`}>
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
