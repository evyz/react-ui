import * as React from "react";
import { ButtonOptions } from "../button.types";

interface initEffectsInterface extends ButtonOptions{
    isDisabled: Boolean;
    setIsDisabled: Function;
}

const initEffects = (props: initEffectsInterface) => {
  React.useEffect(() => {
    if (props?.validation?.depsValidation?.notNull) {
      let status = true;


      for (let dep of props?.validation?.deps !== undefined ? props?.validation?.deps :  []) {
        if (dep) {
          status = false;
          continue;
        } else {
          status = true;
          break;
        }
      }

      props?.setIsDisabled(status);

    }
  }, [props?.validation?.deps, props?.validation?.depsValidation]);

  React.useEffect(() => {
    if (
      props?.validation?.custom !== undefined ||
      props?.validation?.custom !== null
    ) {
      props?.setIsDisabled(props?.validation?.custom !== undefined && props?.validation?.custom);
    }
  }, [props?.validation?.custom]);

}

export default initEffects