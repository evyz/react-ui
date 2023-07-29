import { SelectizeOptions } from "./selectize.types";

interface useHandleKeyPressInterface extends SelectizeOptions{
    text: String,
    setText: Function;
}

const useHandleKeyPress = (props: useHandleKeyPressInterface) => {
    return {
        handleKeyPress: (event: { key: string }) => {
            let res = props?.text ;
            if (props?.validation?.prefix && props?.validation?.prefix?.length > 0) {
              res = props?.validation?.prefix + res;
            }
        
            if (props?.validation?.postfix && props?.validation?.postfix?.length > 0) {
              res = res + props?.validation?.postfix;
            }
        
            if (event.key === "Enter") {
              if (props?.text.length === 0) {
                return;
              }
              if (props?.validation?.unique) {
                if (props?.state?.value?.length > 0) {
                  if (props?.state?.value.find((word: string) => word === res)) {
                    return;
                  }
                } else {
                  if (props?.state?.value === props?.text) {
                    return;
                  }
                }
              }
              props?.state?.value?.length
                ? props?.state?.setValue([...props?.state?.value, res])
                : props?.state?.setValue([res]);
              props?.setText("");
            }
            if (event.key === "Backspace") {
              if (props?.text.length === 0) {
                if (props?.state?.value?.length > 0) {
                  let res = props?.state?.value[props?.state?.value.length - 1];
                  if (props?.validation?.prefix) {
                    res = res.slice(props?.validation?.prefix.length, res.length);
                  }
                  props?.setText(res);
                  props?.state?.setValue([
                    ...props?.state?.value.slice(0, props?.state?.value.length - 1),
                  ]);
                }
              }
            }
          }
    }
}

export default useHandleKeyPress