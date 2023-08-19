import { InputHTMLAttributes } from "react";
import { WidgetBaseOptions } from "../../base.types";

export interface InputOptions extends WidgetBaseOptions{
    events?: {
        onFocus?: Function;
        onBlur?: Function;
        onInput?: Function;
      };
      gui?: {
          label?: string;
          input?: InputHTMLAttributes<any>;
      };
      state?: {
        value?: any;
        setValue?: Function;
      };
      error?: {
        status?: boolean;
        message?: string;
      };
      setError?: Function;
      validation?: {
        prefix?: string;
        postfix?: string;
        unique?: boolean;
        depsValidation?: {
          notNull?: boolean;
          custom?: boolean;
        };
        disabled?: {
          custom?: boolean;
        };
      };
}