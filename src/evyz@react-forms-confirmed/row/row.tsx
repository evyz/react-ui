import * as React from "react";
import { WidgetBaseOptions } from "..";
import "./row.css";

interface RowOptions extends WidgetBaseOptions {
  events?: {
    onClick?: Function ;
  };
}

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
