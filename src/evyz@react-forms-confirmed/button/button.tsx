import * as React from "react";
import "./button.css";
import { WidgetBaseOptions } from "..";
import ButtonLoader from "./src/loader";

interface ButtonOptions extends WidgetBaseOptions {
  events?: {
    onClick?: Function;
  };
  validation?: {
    custom?: boolean | undefined;
    deps?: [];
    depsValidation?: {
      notNull?: boolean;
      custom?: boolean;
    };
  };
  gui?: {
    loader?: {
      promiseLoader?: Function;
      custom?: boolean;
      customLoaderComponent?: React.FC;
    };
    label?: string;
  };
}

const Button = (props: ButtonOptions) => {
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [isLocalLoader, setIsLocalLoader] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (props?.validation?.depsValidation?.notNull) {
      let status = true;


      for (let dep of props?.validation?.deps !== undefined ? props?.validation?.deps :  []) {
        if (dep) {
          status = false;
          continue;
        } else {
          status = true;
          break;
        }
      }

      setIsDisabled(status);

    }
  }, [props?.validation?.deps, props?.validation?.depsValidation]);

  const buttonHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (props?.gui?.loader?.promiseLoader) {
      setIsLocalLoader(true);
      props?.events?.onClick &&
        props?.events?.onClick().then(() => {
          setIsLocalLoader(false);
        });
      return;
    }
    props?.events?.onClick && props?.events?.onClick(event);
  };

  React.useEffect(() => {
    if (
      props?.validation?.custom !== undefined ||
      props?.validation?.custom !== null
    ) {
      setIsDisabled(props?.validation?.custom !== undefined && props?.validation?.custom);
    }
  }, [props?.validation?.custom]);

  return (
    <button
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
      className={`system_button ${props.className} ${
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
