import React, { useEffect, useState } from "react";
import "./dropdown.css";

const DropdownItem = ({ option, setOption, len, onClickItem }) => {
  return (
    <div
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

const Dropdown = ({ options, defaultValue, rules, label, styleRules, onClickHandler }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currOption, setCurrOption] = useState(null);

  useEffect(() => {
    if (rules?.closeAfterSomeChanges) {
      setIsOpened(false);
    }
  }, [currOption, rules]);

  return (
    <div
      className={`system_dropdown_wrapper`}
      style={{ display: "flex", flexDirection: "column" }}
    >
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
