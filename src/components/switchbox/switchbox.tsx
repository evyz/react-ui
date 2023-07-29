import * as React from 'react'
import { CheckboxOptions } from './switchbox.types';


const SwitchBox = (props: CheckboxOptions) => {
    return (
        <div
          className="system_switchbox"
          onClick={(event) => {
            props?.state?.setValue && props?.state?.setValue(!props?.state?.value);
            props?.events?.onClick && props?.events?.onClick(event);
          }}>
          <div className={`box ${props?.state?.value && "active"}`}></div>
          <label>{props?.gui?.label ? props?.gui?.label : props?.children ? props?.children : null}</label>
        </div>
      );
}

export default SwitchBox