import { ReactNode } from "react"
import { WidgetBaseOptions } from "../base.types"

export interface DropdownItem {
    id?: Number
    value?: string
    component?: React.ReactNode
}

export interface DropdownItems extends Array<DropdownItem>{}

export interface DropdownOptions extends WidgetBaseOptions{
    state?: {
        value?: DropdownItem;
        setValue?: Function;
    }
    gui?: {
        items?: DropdownItems,
        arrow?: ReactNode | undefined,
        isOpened?: Boolean | undefined;
        setIsOpened?: Function | undefined;
        onChangeIsOpened?: Function | undefined; 
    }
}

export interface DropdownArrowInterface extends DropdownOptions{
    isOpened: Boolean;
    setIsOpened: Function
}