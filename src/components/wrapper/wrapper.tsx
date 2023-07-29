import * as React from "react";
import { WrapperOptions } from "./wrapper.types";

const Wrapper = (props: WrapperOptions) => {
  return (
    <div className={`system_wrapper ${props?.className}`}>
      {props?.children}
    </div>
  );
};

export default Wrapper;
