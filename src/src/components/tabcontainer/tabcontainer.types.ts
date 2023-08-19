import { WidgetBaseEvents, WidgetBaseOptions } from '../base.types';



export interface TabContainerComponent{
    id: number; title: string; component: any
}

export interface TabContainerEvents{
    onClickToOpenComponent?: Function;
}
    
export interface TabContainerOptions extends WidgetBaseOptions{
    state: {
        active: {
            id: Number
            title: string
            component: any
        };
        setActive: Function;
    };
    gui: {
        components: TabContainerComponent[]
    }
    events?: TabContainerEvents;
}
