import React from "react";
import "./wrapper.css";

const core = class {
  constructor() {
    this._isActive = false
  } 
  activeWorkspace = function () {
    this._isActive = !this._isActive
    return this._isActive
  }

  findWidget(args) {
    if (!this._isActive) return
    console.log(args)
  }     
}

const Wrapper = ({ children, isDarkMode, useCoreConsole }) => {
  if (useCoreConsole) {
    window.core = new core()
  }

  return (
    <div
      className={"system_wrapper " + `${isDarkMode ? "system_mode-dark" : ""}`}
    >
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
