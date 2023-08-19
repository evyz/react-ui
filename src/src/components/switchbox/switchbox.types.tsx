import { WidgetBaseOptions } from "../base.types";

export interface CheckboxOptions extends WidgetBaseOptions{
    state?: {
        value?: boolean,
        setValue?: Function
    };
    events?: {
        onClick?: Function;
    }
    gui?: {
        label?: string;
        labelStyles?: React.CSSProperties;
    }
}
