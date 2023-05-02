import React, { memo, useEffect, useMemo, useState } from "react";
import './grid.css'

const Cell = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )  
}

const Grid = ({ data, gridSettings, gridFilter,setGridFilter }) => {
    
    const [cells, setCells] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!Array.isArray(gridSettings)) {
            throw new Error("GRID_SETTINGS must be array")
        }

        if (gridSettings && gridSettings.length > 0) {
            setCells( gridSettings.map(setting => {
                return { name: setting.name, value: setting.value, width: setting.width ? setting.width : 150, isCanSort: setting?.isCanSort ? true :false }
            }))
        }

        setIsLoading(false)
    }, [data, gridSettings])

    return (
        <div className="system_grid">
            <table>
                <thead>
                    <tr>
                        { cells && cells.length > 0 && cells.map(cell => 
                            <td style={{ width: cell?.width }}>
                                {cell?.name}
                                {cell?.isCanSort && <button onClick={() => {
                                    setGridFilter(prev => {return {...prev, sort: {field: cell?.value, value: gridFilter?.sort  && gridFilter?.sort?.field === cell?.value && gridFilter?.sort?.value === "ASC" ? "DESC" : "ASC"}}})
                                }} className={`system_sort_ico ${gridFilter?.sort  && gridFilter?.sort?.field === cell?.value && "active"} ${gridFilter?.sort && gridFilter?.sort?.field === cell?.value && gridFilter?.sort?.value === "ASC" ? "" : "reversed" }`}></button>}
                            </td>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 && data.map(item =>
                        <tr>
                            {
                                cells && cells.length > 0 && cells.map(cell => 
                                    <td style={{width: cell?.width}}><Cell>{item[cell?.value]}</Cell></td>
                                )    
                             }
                        </tr>
                    )}
                </tbody>
           </table>
        </div>
    )
}

export default Grid