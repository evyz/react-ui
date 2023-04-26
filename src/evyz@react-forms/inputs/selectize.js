import React, { useState } from "react";
import "./selectize.css";

const Selectize = ({ value, setValue, type }) => {
  type = type ? type : "input";

  const [text, setText] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      value?.length ? setValue([...value, text]) : setValue([text]);
      setText("");
    }
    if (event.key === "Backspace") {
      if (text.length === 0) {
        if (value?.length > 0) {
          setText(value[value.length - 1]);
          setValue([...value.slice(0, value.length - 1)]);
        }
      }
    }
  };

  return (
    <div className='system_selectize'>
      {value && value.length > 0 && value.map((word) => <span>{word}</span>)}
      <input
        value={text}
        onKeyDown={handleKeyPress}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Selectize;
