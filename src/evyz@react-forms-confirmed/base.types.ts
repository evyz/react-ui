import { DOMAttributes } from "react";

interface WidgetBaseDOMAttributes extends DOMAttributes<any>{}

export interface WidgetBaseEvents {
    /**
     * @description React.DOMAttributes
     */
    DOMAttributes?: WidgetBaseDOMAttributes
}

export interface WidgetBaseOptions extends WidgetBaseEvents {
    className?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
}