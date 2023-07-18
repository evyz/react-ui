import * as React from "react";
import { WidgetBaseOptions } from "..";
import "./selectize.css";

interface SelectizeOptions extends WidgetBaseOptions {
  validation: {
    prefix: string;
    postfix: string;
    unique: boolean;
  };
  keysAppend: [];
  keysRemove: [];
  state: {
    value: any;
    setValue: Function;
  };
  gui: {
    label: string;
  };
}

const Selectize = (props: SelectizeOptions) => {
  const [text, setText] = React.useState("");

  const handleKeyPress = (event: { key: string }) => {
    let res = text;
    if (props?.validation?.prefix && props?.validation?.prefix?.length > 0) {
      res = props?.validation?.prefix + res;
    }

    if (props?.validation?.postfix && props?.validation?.postfix?.length > 0) {
      res = res + props?.validation?.postfix;
    }

    if (event.key === "Enter") {
      if (text.length === 0) {
        return;
      }
      if (props?.validation?.unique) {
        if (props?.state?.value?.length > 0) {
          if (props?.state?.value.find((word: string) => word === res)) {
            return;
          }
        } else {
          if (props?.state?.value === text) {
            return;
          }
        }
      }
      props?.state?.value?.length
        ? props?.state?.setValue([...props?.state?.value, res])
        : props?.state?.setValue([res]);
      setText("");
    }
    if (event.key === "Backspace") {
      if (text.length === 0) {
        if (props?.state?.value?.length > 0) {
          let res = props?.state?.value[props?.state?.value.length - 1];
          if (props?.validation?.prefix) {
            res = res.slice(props?.validation?.prefix.length, res.length);
          }
          setText(res);
          props?.state?.setValue([
            ...props?.state?.value.slice(0, props?.state?.value.length - 1),
          ]);
        }
      }
    }
  };

  return (
    <div className="system_selectize">
      {props?.state?.value &&
        props?.state?.value.length > 0 &&
        props?.state?.value.map(
          (
            word:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined
          ) => <span>{word}</span>
        )}
      <input
        placeholder={props?.gui?.label}
        style={{
          width: props?.state?.value.length === 0 ? "100%" : "min-content",
        }}
        value={text}
        onKeyDown={handleKeyPress}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Selectize;
