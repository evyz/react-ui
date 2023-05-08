import React, { useState } from "react";
import "./dropdown.css";

const DropdownItem = ({ option, setOption, len }) => {
  return (
    <div
      onClick={() => setOption(option)}
      style={{
        borderBottom: len - 1 === option.id ? "none" : "1px solid gray",
      }}
      className="system_dropdown_option"
    >
      {option.value}
    </div>
  );
};

const Dropdown = ({ options, defaultValue }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currOption, setCurrOption] = useState(null);
  console.log(currOption);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          borderBottom: isOpened ? "none" : "2px solid gray",
          borderBottomLeftRadius: isOpened ? "0px" : "20px",
          borderBottomRightRadius: isOpened ? "0px" : "20px",
          border: "2px solid gray",
        }}
        className={`system_dropdown`}
      >
        <div
          className={`system_dropdown_ceiling`}
          onClick={() => setIsOpened(!isOpened)}
        >
          <span>{currOption === null ? defaultValue : currOption.value}</span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{ zIndex: 2, cursor: "pointer" }}
              onClick={() => setCurrOption(null)}
            >
              x
            </div>
            <div
              style={{ marginLeft: 10 }}
              className={`system_dropdown_arrow ${
                isOpened ? `arrow_up` : `arrow_down`
              }`}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: isOpened ? "" : "none",
          border: "2px solid gray",
        }}
        className={`system_dropdown_options`}
      >
        <div className={`system_dropdown_options_wrapper`}>
          {options.map((option) => (
            <DropdownItem
              key={option.id}
              option={option}
              setOption={setCurrOption}
              len={options.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
