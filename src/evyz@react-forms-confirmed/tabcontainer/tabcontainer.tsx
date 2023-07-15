import * as React from 'react'
import { WidgetBaseOptions } from "..";
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
}

const TabContainer = (props: TabContainerOptions) => {

    React.useEffect(() => {
        props?.state?.setActive(props?.gui?.components?.length > 0 && props?.gui?.components[0])
    }, [])

    return (
        <div className='system_tabcontainer'>
            <div className='pages'>
                {props?.gui?.components  && props?.gui?.components?.length > 0 && props?.gui?.components?.map(component => 
                    <div>{component?.title}</div>
                )}
            </div>
            <div className='layout'>
                {props?.state?.active?.id && props?.gui?.components?.find(component => component.id === props?.state?.active?.id)?.component}
            </div>
        </div>
    )
}


export default TabContainer

