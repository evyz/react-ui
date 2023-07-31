import * as React from 'react'
import { CheckboxOptions } from './checkbox.types';

const Checkbox = (props: CheckboxOptions) => {
    return (
      <div
        {...props?.DOMAttributes}
        className="system_checkbox"
        onClick={(event) => {
          props?.state?.setValue && props?.state?.setValue(!props?.state?.value);
          props?.events?.onClick && props?.events?.onClick(event);
        }}
        style={{ ...props?.styles }}>
        <input type="checkbox" checked={props?.state?.value} />
        <label
          style={{
            ...props?.gui?.labelStyles,
          }}>
          {props?.gui?.label
            ? props?.gui?.label.slice(0, 50) + (props?.gui?.label.length > 50 ? "..." : "")
            : props?.children
            ? props?.children
            : null}
        </label>
      </div>
    )
}



export default Checkbox