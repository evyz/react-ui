import * as React from "react";
import { WidgetBaseOptions } from "..";
import "./wrapper.css";

interface WrapperOptions extends WidgetBaseOptions {}

const Wrapper = (props: WrapperOptions) => {
  return (
    <div className={`system_wrapper ${props?.className}`}>
      {props?.children}
    </div>
  );
};

export default Wrapper;
