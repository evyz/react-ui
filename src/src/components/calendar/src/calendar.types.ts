import React from "react";
import { WidgetBaseEvents, WidgetBaseOptions, WidgetBaseStyles } from "../../base.types";

export interface CellItem extends WidgetBaseEvents {
    id?: string
    value?: string
    component?: React.ReactNode
    
}

export interface CellsItems extends Array<CellItem>{}
export interface StateItems extends Array<any>{}

export interface CalendarTheadInterface extends WidgetBaseStyles{
    cols?: CellsItems
}

export interface CalendarTbodyInterface extends WidgetBaseStyles{
    cols?: CellsItems
}

export interface CalendarGuiInterface extends WidgetBaseStyles{
    thead?: CalendarTheadInterface
    tbody?: CalendarTbodyInterface
}


export interface CalendarOptions extends WidgetBaseOptions{
    state?: {
        value?: StateItems;
    }
    gui?: CalendarGuiInterface
}