import React, { useEffect, useState } from "react";
import "./dropdown.css";

const DropdownItem = ({ option, setOption, len, onClickItem }) => {
  return (
    <div

      onClick={() => setOption(option)}
      className="system_dropdown_option dropdown_value"
      onClick={() => {
        onClickItem && onClickItem()
        setOption(option)
      }}
      style={{
        borderBottom: len - 1 === option.id ? "none" : "1px solid gray",
      }}
      className='system_dropdown_option'
    >
      {option.value}
    </div>
  );
};

const Dropdown = ({ currOption, setCurrOption, options, defaultValue }) => {
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
        <div
          className={`system_dropdown_ceiling`}
          onClick={() => setIsOpened(!isOpened)}
        >
          <span>
            {currOption === null
              ? !defaultValue
                ? label
                : defaultValue
              : currOption.value}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{ zIndex: 2, cursor: "pointer" }}
              onClick={() => {
                onClickHandler && onClickHandler({value: null}) 
                setCurrOption(null)
              }}
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
                 onClickHandler && onClickHandler({value: option}) 
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
