import { WidgetBaseOptions } from "../base.types";
export interface RowOptions extends WidgetBaseOptions {
    events?: {
        onClick?: Function;
    };
}
