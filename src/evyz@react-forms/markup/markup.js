import React from "react";
import "./markup.css";
import { uuidv4 } from "../formbuilder/formbuilder";

const Row = ({
  widgetId,
  children,
  style,
  className,
  onClick,
  isFlex,
  flexParams,
}) => {
  function clickHandler(e) {
    onClick && onClick(e);
  }

  const flexStyles = isFlex && { ...flexParams };

  return (
    <div
      widgetId={widgetId ? widgetId : uuidv4()}
      onClick={clickHandler}
      className={`system_row ${className ? className : ""} `}
      style={{ ...style, ...flexStyles }}
    >
      {children}
    </div>
  );
};

const Cell = ({ widgetId, children, size, style }) => {
  if (size > 12) {
    throw new Error("COLUMN_SIZE more than 12");
  }
  size = "system_col-" + (size ? size : 3);

  return (
    <div
      widgetId={widgetId ? widgetId : uuidv4()}
      style={{ ...style }}
      className={`system_cell ${size}`}
    >
      {children}
    </div>
  );
};

export { Row, Cell };
