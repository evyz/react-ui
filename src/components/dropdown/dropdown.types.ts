import React, { ReactNode } from "react"
import { WidgetBaseOptions } from "../base.types"

export interface DropdownItem {
    id?: Number
    value?: string
    component?: React.ReactNode
}

export interface DropdownItems extends Array<DropdownItem>{ }

export interface DropdownSearchArea{
    isEnabled?: Boolean | undefined;
    value?: string | number | undefined;
    setValue?: Function | undefined;
}

export interface DropdownOptions extends WidgetBaseOptions{
    state?: {
        value?: DropdownItem;
        setValue?: Function;
    }
    gui?: {
        items?: {
            state?: DropdownItems | undefined;
            className?: string | undefined;
            styles?: React.CSSProperties | undefined;
        },
        arrow?: ReactNode | undefined,
        isOpened?: Boolean | undefined;
        setIsOpened?: Function | undefined;
        onChangeIsOpened?: Function | undefined;
        searchArea?: DropdownSearchArea | undefined;
    }
}

export interface DropdownArrowInterface extends DropdownOptions{
    isOpened: Boolean;
    setIsOpened: Function
}