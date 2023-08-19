import * as React from "react";
import { CellOptions } from "./cell.types";
import initEffects from "./src/initEffects";
import useOnClick from "./src/onClick";

const DEFAULT_CELL_SIZE = 3;

/**
 * @description Markup widget
 */
const Cell= (props: CellOptions) => {
  const [size, setSize] = React.useState(props?.gui?.size ?  "system_col-" + props?.gui?.size : null);

  initEffects({...props, setSize})

  const {onClick} = useOnClick(props)

  return (
    <div
      {...props?.DOMAttributes}
      onClick={onClick}
      style={{ ...props?.styles }}
      className={`${props?.enableClassNameBase ? "system_cell" : ""} ${size && size} ${props?.className}`}>
      {props?.children}
    </div>
  );
};

export default Cell;
