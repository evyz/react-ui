import * as React from "react";
import { WidgetBaseOptions } from "..";
import Alert from "../../evyz@react-forms-confirmed/alert/alert";
import "./stackalerts.css";

interface StackAlertsOptions extends WidgetBaseOptions {
  state?: {
    value: [];
    setValue?: Function;
    custom?: Function;
  };
  gui: {
    placement: {
      x: string;
      y: string;
    };
  };
}

interface AlertMessageOptions {
  id?: Number;
  title?: string;
  message: string;
}

const StackAlerts = (props: StackAlertsOptions) => {
  const [stack, setStack] = React.useState([]);
  const [lastPos, setLastPos] = React.useState(0);

  React.useEffect(() => {
    if (props?.state?.value && props?.state?.value?.length)
      setStack(props?.state?.value);
  }, [props?.state?.value]);

  React.useEffect(() => {
    let timer1 = setTimeout(() => {
      if (stack.splice(lastPos + 4, 4).length !== 0) {
        setLastPos(lastPos + 4);
      }
    }, 4 * 1000);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div
      className={`system_stackalerts ${props?.gui?.placement?.x} ${props?.gui?.placement?.y}`}>
      {stack?.splice(lastPos, 4)?.map((item: AlertMessageOptions) => (
        <Alert
          gui={{
            message: { message: item?.message },
            placement: { custom: { className: "stack" } },
          }}></Alert>
      ))}
    </div>
  );
};

export default StackAlerts;
