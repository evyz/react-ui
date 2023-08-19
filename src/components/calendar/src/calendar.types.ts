import React from "react";
import { WidgetBaseOptions, WidgetBaseStyles } from "../../base.types";

export interface CellItem {
    id?:Number
    value?:any
    component?: React.ReactNode
}

export interface CellsItems extends Array<CellItem>{}

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


export interface CalendarOptions extends WidgetBaseOptions, CalendarGuiInterface{
    state?: {
        value?: CellsItems;
    }
}