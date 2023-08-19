import React from "react";
import { CellOptions } from "../cell.types";

interface initEffectsInterface extends CellOptions{
    setSize?: Function;
}

export default (props: initEffectsInterface) => {
    React.useEffect(() => {
        if (props?.gui?.size) {
            props?.setSize && props?.setSize("system_col-" + props?.gui?.size);
        }
      }, [props?.gui?.size]);
}