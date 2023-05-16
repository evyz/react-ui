import { useEffect, useState } from "react";
import "./checkbox.css";

function Checkbox({ value, setValue, onClick, label, children, labelOptions, labelStyles, styles }) {

  return (
    <div
      className='system_checkbox'
      onClick={() => {
        setValue && setValue(!value);
        onClick && onClick()
      }}
      style={{...styles}}
    >
      <input type='checkbox' checked={value} />
      <label
        style={{
          userSelect: labelOptions?.isCantSelect ? "none" : "auto",
          labelStyles
        }}
      >
        {label ? label.slice(0, 50) + (label.length > 50 ? '...' : '') : children ? children : null}
      </label>
    </div>
  );
}

function SwitchBox({ value, setValue, label, children }) {
  return (
       <div
      className='system_switchbox'
      onClick={() => {
        setValue && setValue(!value);
      }}
   >
    <div className={`box ${value && "active"}`}></div>
     <label>
        {label ? label : children ? children : null}
     </label>
    </div>
  )
}

export {Checkbox, SwitchBox};
