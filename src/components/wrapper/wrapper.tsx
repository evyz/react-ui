import * as React from "react";
import { WrapperOptions } from "./wrapper.types";

const Wrapper = (props: WrapperOptions) => {
  return (
    <div {...props?.DOMAttributes} className={`system_wrapper ${props?.className}`}>
      {props?.children}
    </div>
  );
};

export default Wrapper;
