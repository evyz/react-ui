import * as React from 'react'
import { TabContainerOptions } from './tabcontainer.types'
import Button from '../button/button'
import initEffects from './src/initEffects'
import onOpenComponent from './src/onOpenComponent'


const TabContainer = (props: TabContainerOptions) => {

    initEffects(props)

    const {onClickToOpenComponent} = onOpenComponent(props)

    return (
        <div {...props?.DOMAttributes} className='system_tabcontainer'>
            <div className='pages'>
                {props?.gui?.components && props?.gui?.components?.length > 0 && props?.gui?.components?.map(component => 
                <Button className={component?.id === props?.state?.active?.id ? 'active' : ''}  events={{onClick: (event: any) => onClickToOpenComponent(event, component) }} key={component?.id} >
                    {component?.title}
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

