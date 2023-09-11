import React from 'react'
import { WidgetBaseOptions } from "../base.types";
import Row from '../row/row';
import Button from '../button/button';

interface TreeItem{
    id: number | string | undefined;
    value: any;
    component: any;
}

interface Events{
    onOpenChilds: (item: TreeItem, isOpen: Boolean, event: Event) => Function;
    onClick: (item: TreeItem, isOpen: Boolean, event: Event) => Function;
    onBeforeChangingState: (item: TreeItem, isOpen: Boolean, event: Event) => Function;
    onAfterChangingState: (item: TreeItem, isOpen: Boolean, event: Event) => Function;
}

interface TreeOptions extends WidgetBaseOptions{
    state: TreeItem;
    events: Events;
}

const TreeView = (props: TreeOptions) => {
    return (
        <div {...props?.DOMAttributes}>
            {props.children}
        </div>
    )
};

const TreeItem = (props: TreeOptions) => {
    const [isOpened, setIsOpened] = React.useState(false)

    const changeValue = (e: Event) => {
        if (props.events?.onOpenChilds && typeof props.events?.onOpenChilds === "function") {
            props.events?.onOpenChilds && props.events?.onOpenChilds(props.state, !isOpened, e)
        } else {
            props?.events?.onBeforeChangingState(props?.state, isOpened, e)
            setIsOpened(!isOpened)
            props?.events?.onAfterChangingState(props?.state, isOpened, e)
        }
    }

    return (
        <div key={props?.state?.id} {...props?.DOMAttributes}>
            <Row enableClassNameBase>
                {React.Children.count(props.children) && <Button events={{ onClick: (e: Event) => changeValue(e),  }}>{isOpened ? "-" : "+"}</Button>}
                {props?.state?.component ?
                    props?.state?.component : 
                    <span>{props?.state?.value}</span>
                } 
            </Row>
            {isOpened &&
                <ul>
                    {props?.children}
                </ul>
            }
        </div>
    )
}

export {TreeItem, TreeView};