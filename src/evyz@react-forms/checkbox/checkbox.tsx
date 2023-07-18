import "./checkbox.css";
import { WidgetBaseParams } from "../utils/interface";
import React from "react";

interface CheckboxInterface extends WidgetBaseParams {
  value: boolean;
  setValue: Function;
  onClick: Function;
  labelOptions: {
    isCantSelect: boolean;
  };
  labelStyles: React.CSSProperties;
}

const Checkbox = ({
  value,
  setValue,
  onClick,
  label,
  children,
  labelOptions,
  labelStyles,
  styles,
}: CheckboxInterface) => {
  return (
    <div
      className="system_checkbox"
      onClick={() => {
        setValue && setValue(!value);
        onClick && onClick();
      }}
      style={{ ...styles }}>
      <input type="checkbox" checked={value} />
      <label
        style={{
          userSelect: labelOptions?.isCantSelect ? "none" : "auto",
          ...labelStyles,
        }}>
        {label
          ? label.slice(0, 50) + (label.length > 50 ? "..." : "")
          : children
          ? children
          : null}
      </label>
    </div>
  );
};

const SwitchBox = ({
  value,
  setValue,
  label,
  children,
  onClick,
}: CheckboxInterface) => {
  return (
    <div
      className="system_switchbox"
      onClick={() => {
        setValue && setValue(!value);
        onClick && onClick();
      }}>
      <div className={`box ${value && "active"}`}></div>
      <label>{label ? label : children ? children : null}</label>
    </div>
  );
};

export { Checkbox, SwitchBox };
