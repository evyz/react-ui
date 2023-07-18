import * as React from 'react'
import { Button, WidgetBaseOptions } from "..";
import './tabcontainer.css'


/**
 * This is structure tabcontainer component:
 * - id uses like key inside mapping of collection components;
 * - title is header-button tabcontainer;
 * - component is React Component;
 */
interface TabContainerComponent{
    id: number; title: string; component: any
}
    
interface TabContainerOptions extends WidgetBaseOptions{
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
    events: {
        onClickToOpenComponent: Function
    }
}

const TabContainer = (props: TabContainerOptions) => {

    React.useEffect(() => {
        !props?.state?.active?.id && props?.state?.setActive(props?.gui?.components?.length > 0 && props?.gui?.components[0])
    }, [props])

    const onClickToOpenComponent = (event:any, state: TabContainerComponent) => {
        props?.events?.onClickToOpenComponent && props?.events?.onClickToOpenComponent(event)
        props?.state?.setActive(state)
    }

    return (
        <div className='system_tabcontainer'>
            <div className='pages'>
                {props?.gui?.components && props?.gui?.components?.length > 0 && props?.gui?.components?.map(component => 
                <Button className={component?.id === props?.state?.active?.id ? 'active' : ''}  events={{onClick: (event: any) => onClickToOpenComponent(event, component) }} key={component?.id} >
                    asdads
                </Button>
                )}
            </div>
            <div className='layout'>
                {props?.state?.active?.id && props?.gui?.components?.find(component => component.id === props?.state?.active?.id)?.component}
            </div>
        </div>
    )
}


export default TabContainer

