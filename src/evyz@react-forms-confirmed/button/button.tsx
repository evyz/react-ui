import * as React from "react";
import "./button.css";
import { WidgetBaseOptions } from "..";

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
      }`}>
      {isLocalLoader || props?.gui?.loader?.custom ? (
        props?.gui?.loader?.customLoaderComponent ? (
          <props.gui.loader.customLoaderComponent></props.gui.loader.customLoaderComponent>
        ) : (
          <div className="system_loader">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              version="1.1"
              id="Capa_1"
              width={30}
              height={30}
              viewBox="0 0 26.349 26.35">
              <g>
                <g>
                  <circle cx="13.792" cy="3.082" r="3.082" />
                  <circle cx="13.792" cy="24.501" r="1.849" />
                  <circle cx="6.219" cy="6.218" r="2.774" />
                  <circle cx="21.365" cy="21.363" r="1.541" />
                  <circle cx="3.082" cy="13.792" r="2.465" />
                  <circle cx="24.501" cy="13.791" r="1.232" />
                  <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05    C6.902,18.996,5.537,18.988,4.694,19.84z" />
                  <circle cx="21.364" cy="6.218" r="0.924" />
                </g>
              </g>
            </svg>
          </div>
        )
      ) : (
        <></>
      )}
      {props?.children ? props?.children : props?.gui?.label !== undefined ? props?.gui?.label : null}
    </button>
  );
};

export default Button;
