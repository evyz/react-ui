import React, { useState } from "react";
import "./dropdown.css";

const DropdownItem = ({ option, setOption, len, onClickItem }) => {
  return (
    <div
      className="system_dropdown_option dropdown_value"
      onClick={() => {
        onClickItem && onClickItem();
        setOption(option);
      }}
      style={{
        borderBottom: len - 1 === option.id ? "none" : "1px solid gray",
      }}
    >
      {option.value}
    </div>
  );
};

const Dropdown = ({
  styleRules,
  rules,
  options,
  defaultValue,
  label,
  currOption,
  setCurrOption,
  onClickHandler,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  // ТИПА ИЗМЕНЕНИЯ ЧТОБЫ НАЕБАТЬ ПУЛЛ РЕКВЕСТ УХАХАХАХ

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
        style={{
          display: isOpened ? "" : "none",
          border: "2px solid gray",
        }}
        className={`system_dropdown_options ${
          styleRules?.isModalOptions ? "isModal" : ""
        }`}
      >
        <div className={`system_dropdown_options_wrapper`}>
          {options.map((option) => (
            <DropdownItem
              key={option.id}
              option={option}
              setOption={setCurrOption}
              len={options.length}
              onClickItem={() => {
                onClickHandler && onClickHandler({ value: option });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
