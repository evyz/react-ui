import React, { useState } from "react";
import "./dropdown.css";

const DropdownItem = ({ option, setOption, len }) => {
  return (
    <div
      onClick={() => setOption(option)}
      className="system_dropdown_option dropdown_value"
    >
      {option.value}
    </div>
  );
};

const Dropdown = ({ currOption, setCurrOption, options, defaultValue }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={`dropdown ${isOpened ? "dropdown_opened" : ""}`}>
      <div
        className="dropdown_placeholder"
        onClick={() => setIsOpened(!isOpened)}
      >
        <span>{currOption === null ? defaultValue : currOption.value}</span>
        <button
          className={`dropdown_toggle ${
            isOpened ? "dropdown_toggle_active" : ""
          } `}
        ></button>
      </div>
      <div
        style={{ visibility: isOpened ? "initial" : "hidden" }}
        className="dropdown_seperator"
      />
      <div
        style={{ display: isOpened ? "flex" : "none" }}
        className="dropdown_values_wrapper"
      >
        {options.map((option) => (
          <DropdownItem option={option} setOption={setCurrOption} />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
