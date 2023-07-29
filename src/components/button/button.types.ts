import { WidgetBaseOptions } from "../base.types";

export interface ButtonOptions extends WidgetBaseOptions {
    events?: {
      onClick?: Function;
    };
    validation?: {
      custom?: boolean | undefined;
      deps?: [];
      depsValidation?: {
        notNull?: boolean;
        custom?: boolean;
      };
    };
    gui?: {
      loader?: {
        promiseLoader?: Function;
        custom?: boolean;
        customLoaderComponent?: React.FC;
      };
      label?: string;
    };
  }
  