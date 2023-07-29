/// <reference types="react" />
import * as React$1 from 'react';

interface RowOptions extends WidgetBaseOptions {
    events?: {
        onClick?: Function;
    };
}
declare const Row: (props: RowOptions) => React$1.JSX.Element;

interface WidgetBaseOptions {
    className?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
}

export { Row, WidgetBaseOptions };
