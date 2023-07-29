import * as React from "react";
import { WidgetBaseOptions } from '../..';
interface RowOptions extends WidgetBaseOptions {
    events?: {
        onClick?: Function;
    };
}
declare const Row: (props: RowOptions) => React.JSX.Element;
export default Row;
