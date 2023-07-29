import * as React$1 from 'react';
import { FC } from 'react';

/**
 * @description Markup widget
 */
declare const Row: FC;

interface WidgetBaseOptions {
    className?: string;
    children?: React.ReactNode;
    styles?: React.CSSProperties;
}

interface CellOptions extends WidgetBaseOptions {
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

/**
 * @description Markup widget
 */
declare const Cell: (props: CellOptions) => React$1.JSX.Element;

export { Cell, Row };
