import * as React from "react";
import ButtonLoader from "./src/loader";
import { ButtonOptions } from "./button.types";
import initEffects from "./src/useEffects";
import useButtonHandler from "./src/buttonHandler";


const Button = (props: ButtonOptions) => {
  console.log("REACT", React)
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [isLocalLoader, setIsLocalLoader] = React.useState(false);
  const ref = React.useRef(null);

  initEffects({...props, isDisabled, setIsDisabled})

  const {buttonHandler} = useButtonHandler({...props, setIsLocalLoader})

  return (
    <button
      {...props?.DOMAttributes}
      ref={ref}
      title={
        isDisabled
          ? props?.validation?.depsValidation?.notNull
            ? "Fill the fields"
            : ""
          : ""
      }
      disabled={isDisabled}
      onClick={buttonHandler}
      className={`${props?.enableClassNameBase ? "system_button" : ""} ${props.className} ${
        isLocalLoader || props?.gui?.loader?.custom ? "isLoading" : ""
      }`}
      style={{...props?.styles}}
      >
      {isLocalLoader || props?.gui?.loader?.custom ? (
        props?.gui?.loader?.customLoaderComponent ? (
          <props.gui.loader.customLoaderComponent></props.gui.loader.customLoaderComponent>
        ) : (
          <ButtonLoader />
        )
      ) : (
        <></>
      )}
      {props?.children ? props?.children : props?.gui?.label !== undefined ? props?.gui?.label : null}
    </button>
  );
};

export default Button;
