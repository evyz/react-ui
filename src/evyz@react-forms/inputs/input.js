import React, { useEffect, useRef, useState } from "react";
import "./input.css";

import icoWarning from "../assets/warning-ico.svg";
import icoWarningAlt from "../assets/warning-ico-alt.svg";

const icons = [
  {
    name: "warning",
    default: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_887_911)'>
          <path
            d='M13.3778 4.29545L21.0933 17.6591C21.7056 18.7197 20.9402 20.0455 19.7155 20.0455H4.2845C3.05982 20.0455 2.29439 18.7197 2.90673 17.6591L10.6222 4.29545C11.2346 3.23485 12.7654 3.23485 13.3778 4.29545Z'
            stroke='#DA5656'
            strokeWidth='1.90909'
          />
          <path
            d='M12 8L12 14'
            stroke='#DA5656'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <circle
            cx='1'
            cy='1'
            r='1'
            transform='matrix(1 0 0 -1 11 18)'
            fill='#DA5656'
          />
        </g>
      </svg>
    ),
    hover: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_887_916)'>
          <path
            d='M13.3778 4.29545L21.0933 17.6591C21.7056 18.7197 20.9402 20.0455 19.7155 20.0455H4.2845C3.05982 20.0455 2.29439 18.7197 2.90673 17.6591L10.6222 4.29545C11.2346 3.23485 12.7654 3.23485 13.3778 4.29545Z'
            fill='#DA5656'
            stroke='#DA5656'
            strokeWidth='1.90909'
          />
          <path d='M12 8L12 14' stroke-width='1.5' strokeLinecap='round' />
          <circle
            cx='1'
            cy='1'
            r='1'
            transform='matrix(1 0 0 -1 11 18)'
            fill='#F5F5F5'
          />
        </g>
      </svg>
    ),
  },
];

export const renderIco = (name) => {
  const icon = icons.find((icon) => icon.name === name);
  return icon;
};

const Input = ({ value, setValue, label, error, setError, rules }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHoveringError, setIsHoveringError] = useState(false);
  const [isActiveError, setIsActiveError] = useState(false);
  const errorRef = useRef(null);

  const blurHandler = (e) => {
    setIsFocused(false);

    if (rules?.notNull) {
      if (!value || !value.length) {
        if (setError) setError({ status: true, message: "Fill in the field" });
        return;
      }
    }

    if (setError) setError({ status: false, message: "It`s okay" });
  };

  return (
    <div
      className={
        "system_input " +
        `${error?.status ? "system_error" : ""} ${
          isFocused ? "system_focused" : ""
        }`
      }
      style={{
        marginBottom: error?.status ? errorRef.current?.offsetHeight : 0,
      }}
      onMouseLeave={() => {
        setIsActiveError(false);
      }}
    >
      <input
        onFocus={() => setIsFocused(true)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={blurHandler}
        placeholder={label}
      />
      {/* {error?.status && error?.message && (
        <span
          onMouseEnter={() => {
            !isFocused && setIsHoveringError(true);
          }}
          onMouseLeave={() => {
            !isFocused && setIsHoveringError(false);
          }}
          className={`system_icon ${isHoveringError ? "" : "disabled"}`}
          onClick={() => setIsActiveError(true)}
        >
          {renderIco("warning")[isHoveringError ? "hover" : "default"]}
        </span>
      )} */}
      {/* {error?.status && error?.message && <label className="system_error" title={error?.message}><h1>!</h1></label>} */}
      <label
        ref={errorRef}
        style={{
          bottom: error?.status ? `-${errorRef.current?.offsetHeight}px` : 0,
        }}
      >
        {error?.status && error?.message && error?.message}
      </label>
    </div>
  );
};

export default Input;
