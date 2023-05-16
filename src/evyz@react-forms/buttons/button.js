import React, { useContext, useEffect, useRef, useState } from "react";
import "./button.css";
import { uuidv4 } from "../formbuilder/formbuilder";

const Button = ({
  widgetId,
  children,
  deps,
  onClick,
  rulesToDeps,
  useLocalLoader,
  isLoading,
  setIsLoading,
  customValidationToDisable
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLocalLoader, setIsLocalLoader] = useState(false);
  const ref = useRef();
  const [refId, setRefId] = useState();

  useEffect(() => {
    setRefId(widgetId ? widgetId : uuidv4());
  }, []);

  useEffect(() => {
    if (rulesToDeps?.notNull) {
      let status = true;

      for (let dep of deps) {
        if (dep && dep.length) {
          status = false;
          continue;
        } else {
          status = true;
          break;
        }
      }

      setIsDisabled(status);
    }
  }, [deps, rulesToDeps]);

  const buttonHandler = () => {
    if (useLocalLoader) {
      setIsLocalLoader(true);
      onClick().then(() => {
        setIsLocalLoader(false);
      });
      return;
    }
    onClick();
  };

  useEffect(() => {
    if (typeof customValidationToDisable === 'boolean') {
      setIsDisabled(!customValidationToDisable)
    } else {
      console.error('customValidationToDisable is unvalidated. typeof must be boolean')
    }
  }, [customValidationToDisable])

  return (
    <button
      ref={ref}
      widgetId={refId}
      title={isDisabled ? (rulesToDeps?.notNull ? "Заполните поля" : "") : null}
      disabled={isDisabled}
      className={
        "system_button " + (isLoading || isLocalLoader ? "isloading" : "")
      }
      onClick={buttonHandler}
    >
      {(isLocalLoader || isLoading) && (
        <div className='system_loader'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='#000000'
            version='1.1'
            id='Capa_1'
            width={30}
            height={30}
            viewBox='0 0 26.349 26.35'
          >
            <g>
              <g>
                <circle cx='13.792' cy='3.082' r='3.082' />
                <circle cx='13.792' cy='24.501' r='1.849' />
                <circle cx='6.219' cy='6.218' r='2.774' />
                <circle cx='21.365' cy='21.363' r='1.541' />
                <circle cx='3.082' cy='13.792' r='2.465' />
                <circle cx='24.501' cy='13.791' r='1.232' />
                <path d='M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05    C6.902,18.996,5.537,18.988,4.694,19.84z' />
                <circle cx='21.364' cy='6.218' r='0.924' />
              </g>
            </g>
          </svg>
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
