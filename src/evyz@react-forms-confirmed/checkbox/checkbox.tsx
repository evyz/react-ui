import * as React from 'react'
import { WidgetBaseOptions } from "..";
import './checkbox.css'

interface CheckboxOptions extends WidgetBaseOptions{
    state: {
        value: boolean,
        setValue: Function
    };
    events: {
        onClick: Function;
    }
    gui: {
        label: string;
        labelStyles: React.CSSProperties;
    }
}


const Checkbox = (props: CheckboxOptions) => {
    return (
        <div
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

export {Checkbox, SwitchBox}