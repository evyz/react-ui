import "./alert.css";
import cancelClose from "../assets/cancel-close.svg";
import { useEffect, useRef, useState } from "react";

const Alert = ({ settings }) => {
  const { withTitle, title, message, xPosition, yPosition } = settings;
  const [isMouseOver, setIsMouseOver] = useState(false);
  const alertRef = useRef(null);

  if (withTitle && !title.length) {
    throw new Error(
      "Property withTitle was set TRUE, but TITLE property was not set"
    );
  }
  if (!xPosition.length || !yPosition.length) {
    throw new Error("Either xPosition or yPosition property was not set");
  }

  const handleClose = () => {
    if (alertRef.current.classList.contains("on_close")) {
      return;
    }
    alertRef.current.classList.add("on_close");
    alertRef.current.style.display = "none";
  };

  useEffect(() => {
    if (alertRef.current.style.animationPlayState === "running") {
      alertRef.current.style.animationPlayState = "paused";
    } else alertRef.current.style.animationPlayState = "running";
  }, [isMouseOver]);

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      ref={alertRef}
      className={`system_alert ${xPosition} ${yPosition}`}
    >
      <div className={`system_alert_wrapper`}>
        <img
          onClick={handleClose}
          className={`system_alert_cancel_close`}
          src={cancelClose}
          alt="close"
        ></img>
        {withTitle && (
          <div className={`system_alert_title`}>
            <p>{title}</p>
          </div>
        )}
        <div className={`system_alert_message`}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
