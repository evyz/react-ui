import React, {FC} from "react";
import { RowOptions } from "./row.types";

/**
 * @description Markup widget
 */
const Row = (props: RowOptions) => {
  const onClick = (event: any) => {
    props?.events?.onClick && props?.events?.onClick(event);
  };
  return (
    <div
      onClick={onClick}
      className={`system_row ${props?.className}`}
      style={{ ...props?.styles }}>
      {props?.children}
    </div>
  );
};

export default Row;
