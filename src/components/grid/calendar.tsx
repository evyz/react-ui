import * as React from 'react'
import { GridOptions } from "./src/calendar.types"

const Grid = (props: GridOptions) => {
    return (
        <table className={`${props?.enableClassNameBase ? 'system_calendar' : ''}`}>
            <thead>
                <tr>
                    {props?.gui?.thead?.cols && props?.gui?.thead?.cols.length && props?.gui?.thead?.cols.map(column =>
                        <td {...column?.DOMAttributes} key={column?.id}>{column?.component ? column?.component : column?.value}</td>    
                    )}
                </tr>
            </thead>
            <tbody>
                {props?.state?.value && props?.state?.value.length && props?.state?.value.map(item => 
                    <tr key={item?.id}>
                        {props?.gui?.thead?.cols?.map(column => 
                        column?.value && <td>{item[Object.keys(item).find(key => key === column?.value ? column?.value : 'id')  !== null ? String(Object.keys(item).find(key => key === column?.value)) : 'id' ]}</td> 
                        )}
                    </tr>    
                )}
            </tbody>
    </table>
    )
}

export default Grid