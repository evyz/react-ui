import * as React from 'react'
import { FieldsetOptions } from './fieldset.types'
import Cell from '../cell/cell'

const Fieldset = (props: FieldsetOptions) => {
    return (
        <div {...props.DOMAttributes} className={"system_fieldset " + props?.className ? props?.className : ''} style={props?.styles}>
            <Cell className={props?.gui?.cell?.className} styles={{ boxSizing: 'border-box', width: '100%', border: '1px solid black', ...props?.gui?.cell?.styles }}>
                <label className={props?.gui?.label?.className} style={props?.gui?.label?.styles}>{props?.gui?.label?.children}</label>
                {props?.children}
            </Cell>
        </div>
    )
}

export default Fieldset