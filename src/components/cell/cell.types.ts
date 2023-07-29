import { WidgetBaseOptions } from "../base.types";

export interface CellOptions extends WidgetBaseOptions {
    events?: {
      onClick?: Function;
    };
    gui?: {
      size?: Number;
    };
}