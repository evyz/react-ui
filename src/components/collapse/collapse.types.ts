import { WidgetBaseOptions } from "../base.types";

export interface CollapseOptions extends WidgetBaseOptions {
    gui?: {
        label?: {
            children?: any
        }
        children?: any;
    }
}