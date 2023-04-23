import React from "react";
import "./button.css";

const Button = ({ children, deps, onClick }) => {
  return (
    <button className='system_button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
