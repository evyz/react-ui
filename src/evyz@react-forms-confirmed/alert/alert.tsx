import * as React from "react";
import { WidgetBaseOptions } from "..";
import "./alert.css";
import useEvents, { AlertEvents } from "./src/events";
import getIcons from "./src/icons";

interface AlertOptions extends WidgetBaseOptions, AlertEvents {
  gui?: {
    timeout?: {
      ms?: Number;
      className?: string;
    };
    message: {
      title?: string;
      message: string;
    };
    placement?: {
      x?: string;
      y?: string;
      custom?: {
        className?: string;
        styles?: React.CSSProperties;
      };
      ignorePlacement?: boolean;
    };
    style?: React.CSSProperties;
    icons?: {
      close?: {
        path?: string;
        code?: string;
      };
      title?: {
        path?: string;
        code?: string;
      };
    };
  };
}

const Alert = (props: AlertOptions) => {
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const alertRef = React.useRef<HTMLDivElement>(null);

  const { onCloseAlert } = useEvents(props, alertRef);
  const { defaultClose } = getIcons();

  React.useEffect(() => {
    if (alertRef?.current) {
      if (alertRef?.current?.style?.animationPlayState === "running") {
        alertRef.current.style.animationPlayState = "paused";
      } else {
        if (alertRef?.current) {
          alertRef.current.style.animationPlayState = "running";
        }
      }
    }
  }, [isMouseOver]);

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      ref={alertRef}
      style={props?.gui?.style}
      className={`system_alert ${props?.gui?.placement?.x} ${props?.gui?.placement?.y} ${props?.gui?.placement?.custom?.className}`}>
      <div className={`system_alert_wrapper`}>
        <img
          onClick={onCloseAlert}
          className={`system_alert_cancel_close`}
          src={`${defaultClose}`}
          alt="close"></img>

        {props?.gui?.message?.title && (
          <div className={`system_alert_title`}>
            <p>{props?.gui?.message?.title}</p>
          </div>
        )}
        <div className={`system_alert_message`}>
          <p>{props?.gui?.message?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
