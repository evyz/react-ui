import { DOMAttributes } from "react";

interface WidgetBaseDOMAttributes extends DOMAttributes<any>{}

export interface WidgetBaseStyles{
    enableClassNameBase?: Boolean;
    className?: string;
    styles?: React.CSSProperties;
}

export interface WidgetBaseEvents {
    /**
     * @description React.DOMAttributes
     */
    DOMAttributes?: WidgetBaseDOMAttributes
}

export interface WidgetBaseOptions extends WidgetBaseEvents, WidgetBaseStyles {
    children?: React.ReactNode;
}