import React, { useState } from "react";
import "./input.css";

const Input = ({ value, setValue, label }) => {
  const [isFocused, setIsFocused] = useState(false);

  const blurHandler = (e) => {
    setIsFocused(false);
  };

  return (
    <div className='system_input'>
      <input
        onFocus={() => setIsFocused(true)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={blurHandler}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
