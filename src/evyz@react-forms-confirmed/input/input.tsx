import * as React from "react";
import { WidgetBaseOptions } from "..";
import "./input.css";

interface InputOptions extends WidgetBaseOptions {
  events: {
    onFocus: Function;
    onBlur: Function;
    onInput: Function;
  };
  gui: {
    label: string;
    /**
     * @description input type
     */
    type: string; 
  };
  state: {
    value: any;
    setValue: Function;
  };
  error: {
    status: boolean;
    message: string;
  };
  setError: Function;
  validation: {
    prefix: string;
    postfix: string;
    unique: boolean;
    depsValidation: {
      notNull: boolean;
      custom: boolean;
    };
    disabled: {
      custom: boolean;
    };
  };
}

const Input = (props: InputOptions) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const errorRef = React.useRef<HTMLLabelElement>(null);
  const [errorRefOffsetHeigth, setErrorRefOffsetHeigth] = React.useState<number |undefined>(0);

  const recalculateErrorLabel = () => {
    let height = errorRef?.current?.clientHeight;
    setErrorRefOffsetHeigth(height);
  };

  const onFocus = (event: any) => {
    setIsFocused(true);
    props?.events?.onFocus && props?.events?.onFocus(event);
  };

  const onInput = (event: any) => {
    props?.events?.onInput && props?.events?.onInput(event);
  };

  const onBlur = (event: any) => {
    setIsFocused(false);
    if (props?.validation?.depsValidation?.notNull) {
      if (!props?.state?.value) {
        recalculateErrorLabel();
        if (props?.setError)
          props?.setError({ status: true, message: "Fill in the field" });
        return;
      }
    }
    props?.events?.onBlur && props?.events?.onBlur(event);
    recalculateErrorLabel();
    if (props?.setError)
      props?.setError({ status: false, message: "It`s okay" });
  };

  return (
    <div
      className={
        "system_input " +
        `${props?.error?.status ? "system_error" : ""} ${
          isFocused ? "system_focused" : ""
        } ${props?.validation?.disabled?.custom ? "disabled" : ""}`
      }
      style={{
        marginBottom: props?.error?.status ? errorRefOffsetHeigth : 0,
      }}>
      <input
        disabled={props?.validation?.disabled?.custom}
        onInput={onInput}
        onFocus={onFocus}
        value={props?.state?.value}
        onChange={(e) =>
          props?.state?.setValue && props?.state?.setValue(e.target.value)
        }
        onBlur={onBlur}
        placeholder={props?.gui?.label}
        type={props?.gui?.type ? props?.gui?.type : 'text'}
        security={props?.gui?.type === "password" ? "true" : "false"}
      />

      <label
        ref={errorRef}
        style={{
          bottom: props?.error?.status ? errorRefOffsetHeigth ? errorRefOffsetHeigth * -1 : 0: 0,
          opacity: props?.error?.status ? 1 : 0,
        }}>
        {props?.error?.message}
      </label>
    </div>
  );
};

export default Input;
