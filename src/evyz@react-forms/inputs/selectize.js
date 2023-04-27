import React, { useState } from "react";
import "./selectize.css";

const Selectize = ({ value, setValue, type, rules, label }) => {
  type = type ? type : "input";

  const [text, setText] = useState("");
  const handleKeyPress = (event) => {
    let res = text;
    if (rules?.prefix && rules?.prefix?.length > 0) {
      res = rules?.prefix + res;
    }

    if (rules?.postfix && rules?.postfix?.length > 0) {
      res = res + rules?.postfix;
    }

    if (event.key === "Enter") {
      if (text.length === 0) {
        return;
      }
      if (rules?.uniqueValues) {
        if (value?.length > 0) {
          if (value.find((word) => word === res)) {
            return;
          }
        } else {
          if (value === text) {
            return;
          }
        }
      }
      value?.length ? setValue([...value, res]) : setValue([res]);
      setText("");
    }
    if (event.key === "Backspace") {
      if (text.length === 0) {
        if (value?.length > 0) {
          let res = value[value.length - 1];
          if (rules?.prefix) {
            res = res.slice(rules?.prefix.length, res.length);
          }
          setText(res);
          setValue([...value.slice(0, value.length - 1)]);
        }
      }
    }
  };

  return (
    <div className='system_selectize'>
      {value && value.length > 0 && value.map((word) => <span>{word}</span>)}
      <input
        placeholder={label}
        onBlur={() => console.log("yoyoyoyoy")}
        style={{ width: value.length === 0 ? "100%" : null }}
        value={text}
        onKeyDown={handleKeyPress}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Selectize;
