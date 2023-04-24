import React, { useEffect, useState } from "react";
import "./button.css";

const Button = ({ children, deps, onClick, rulesToDeps }) => {

  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    if(rulesToDeps?.notNull){
      let status = true

      for(let dep of deps){
        if(dep && dep.length){
          status = false
          continue
        }else{
          status = true
          break
        }
      }

      setIsDisabled(status)
    }
  }, [deps])

  return (
    <button title={isDisabled ? rulesToDeps?.notNull ? "Заполните поля" : "" : null} disabled={isDisabled} className={'system_button'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
