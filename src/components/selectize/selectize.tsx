import * as React from "react";
import useHandleKeyPress from "./src/handlekeyPress";
import { SelectizeOptions } from "./selectize.types";

const Selectize = (props: SelectizeOptions) => {
  const [text, setText] = React.useState("");

  const {handleKeyPress} = useHandleKeyPress({...props, text, setText})

  return (
    <div className={`${props?.enableClassNameBase ? "system_selectize" : ""}`} {...props?.DOMAttributes}>
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
