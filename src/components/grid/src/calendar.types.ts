import React from "react";
import { WidgetBaseEvents, WidgetBaseOptions, WidgetBaseStyles } from "../../base.types";

export interface CellItem extends WidgetBaseEvents {
    id?: string
    value?: string
    component?: React.ReactNode
}

export interface CellsItems extends Array<CellItem>{}
export interface StateItems extends Array<any>{}

export interface GridTheadInterface extends WidgetBaseStyles{
    cols?: CellsItems
}

export interface GridTbodyInterface extends WidgetBaseStyles{
    cols?: CellsItems
}

export interface GridGuiInterface extends WidgetBaseStyles{
    thead?: GridTheadInterface
    tbody?: GridTbodyInterface
}


export interface GridOptions extends WidgetBaseOptions {
    state?: {
        value?: StateItems
    }
    gui?: GridGuiInterface
}