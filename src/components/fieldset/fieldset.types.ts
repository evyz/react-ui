import React, { ReactNode } from "react";
import { WidgetBaseOptions } from "../base.types";

export interface FieldsetOptions extends WidgetBaseOptions{
    gui?: {
        children?: ReactNode | undefined;
        cell?: {
            styles?: React.CSSProperties;
            className?: string;
        }
        label?: {
            styles?: React.CSSProperties;
            className?: string;
            children?: ReactNode | undefined;
        }
    }
}