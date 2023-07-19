import React, { useEffect, useRef, useState } from "react";
import "./input.css";
import { WidgetBaseParams } from "../utils/interface";
import { type } from "@testing-library/user-event/dist/type";

interface InputInterface extends WidgetBaseParams {
  value: boolean;
  setValue: Function;
  error: {
    status: boolean;
    message: string;
  };
  setError: Function;
  rules: {
    notNull: boolean;
  };
  type: string;
  onFocus: Function;
  onBlur: Function;
  onInput: Function;
  disabled: boolean;
}

interface CalendarPickerInterface {
  date: Date;
  setDate: Function;
  monthToShow: {
    getFullYear: Function;
    getMonth: Function;
    getDate: Function;
    getDay: Function;
  };
  setMonthToShow: Function;
  rules: {
    showCurrentMonth: boolean;
  };
}

const Input = ({
  value,
  setValue,
  label,
  error,
  setError,
  rules,
  type,
  onFocus,
  onBlur,
  onInput,
  disabled,
}: InputInterface) => {
  const [isFocused, setIsFocused] = useState(false);
  const errorRef = React.useRef<HTMLButtonElement>(null);
  const [errorRefOffsetHeigth, setErrorRefOffsetHeigth] = useState(0);

  return (
    <div
      className={
        "system_input " +
        `${error?.status ? "system_error" : ""} ${
          isFocused ? "system_focused" : ""
        } ${disabled ? "disabled" : ""}`
      }
      style={{
        marginBottom: error?.status ? errorRefOffsetHeigth : 0,
      }}></div>
  );
};

export default Input;
