import React, { useEffect, useState } from "react";
import "./input.css";

const Input = ({ value, setValue, label, error, setError, rules}) => {
  const [isFocused, setIsFocused] = useState(false);

  const blurHandler = (e) => {
    setIsFocused(false);

    if(rules?.notNull){
      console.log(value, value.length)
      if(!value || !value.length){
        setError({status: true, message: "Fill in the field"})
        return
      }
    }

    setError({status: false, message: "It`s okay"})
  };


  return (
    <div className={'system_input ' + `${error?.status ? 'system_error' : ''} ${isFocused ? 'system_focused' : ''}`}>
      <input
        onFocus={() => setIsFocused(true)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={blurHandler}
        placeholder={label}
      />
      {/* {error?.status && error?.message && <label className="system_error" title={error?.message}><h1>!</h1></label>} */}
    </div>
  );
};

export default Input;
