import { WidgetBaseOptions } from "../base.types";

export interface CellOptions extends WidgetBaseOptions {
    events?: {
      onClick?: Function;
    };
    gui?: {
      /**
       * @description Write number to set cell size
       */
      size?: Number;
    };
}