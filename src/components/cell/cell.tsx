import * as React from "react";
import { CellOptions } from "./cell.types";

const DEFAULT_CELL_SIZE = 3;

/**
 * @description Markup widget
 */
const Cell = (props: CellOptions) => {
  const [size, setSize] = React.useState("system_col-" + DEFAULT_CELL_SIZE);

  React.useEffect(() => {
    if (props?.gui?.size) {
      setSize("system_col-" + props?.gui?.size);
    }
  }, [props?.gui?.size]);

  const onClick = (event: any) => {
    props?.events?.onClick && props?.events?.onClick(event);
  };

  return (
    <div
      onClick={onClick}
      style={{ ...props?.styles }}
      className={`system_cell ${size}`}>
      {props?.children}
    </div>
  );
};

export default Cell;
