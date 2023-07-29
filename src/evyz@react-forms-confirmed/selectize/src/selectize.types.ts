import { WidgetBaseOptions } from "../..";

export interface SelectizeOptions extends WidgetBaseOptions {
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
  