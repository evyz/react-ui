import React from "react";
import "./markup.css";

const Row = ({ children }) => {
  return <div className='system_row'>{children}</div>;
};

const Cell = ({ children, size, style }) => {
  if (size > 12) {
    throw new Error("COLUMN_SIZE more than 12");
  }
  size = "system_col-" + (size ? size : 3);

  return (
    <div style={{ ...style }} className={`system_cell ${size}`}>
      {children}
    </div>
  );
};

export { Row, Cell };
