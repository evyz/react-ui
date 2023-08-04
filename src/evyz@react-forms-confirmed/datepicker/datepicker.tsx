import * as React from 'react'
import { DatepickerOptions, DateBarInterface } from './src/datepicker.types'
import initStates from './src/initStates'

import './datepicker.css'

export const DAYSOFWEEK = ["S", "M", "T", "W", "T", "F", "S"]
export const MONTHS = ["January", "February", "March", "April", "May", "June", "Jule", "August", "September", "October", "November", "December"]

const DateBar = (props: DateBarInterface) => {

    const [date, setDate] = React.useState<String>("")

    const normalizeNumber = (value: any) => {
        if (!value) {
            return 
        }
        if (value.length === 1) {
            value = "0" + value
        }

        return value
    }

    React.useEffect(() => {
        let value = new Date(props?.dateRender)
        let result

        if (props?.format?.value) {
            result = props?.format?.value                    
            result = result?.replace('year', value.getFullYear().toString())
            result = result?.replace('month', MONTHS[value.getMonth() + 1])
            result = result?.replace('mm', normalizeNumber((value.getMonth() + 1).toString()))
            } else if (props?.format?.custom) {
            result = props?.format?.custom(props?.dateRender)
        }
            
        if (result) {
            setDate(result)
        }
    }, [props.dateRender])

    return (
        <label onClick={(e) => props?.onClick && props?.onClick(e)}>{date}</label>
    )
}

const DatePicker = (props: DatepickerOptions) => {
    const { dateRender, setDateRender, matrix, setMatrix, isOpenedFullEditor, setIsOpenedFullEditor } = initStates()

    React.useEffect(() => {
        let startOf = new Date(dateRender.getFullYear(), dateRender.getMonth(), 1)
        let endOf = new Date(dateRender.getFullYear(), dateRender.getMonth() + 1, 0, 23, 59, 59, 59)

        let tempMatrix: (Date | null)[][] = [];

        while (endOf.getTime() > startOf.getTime()) {
            if (tempMatrix.length === 0) {
                let row = []
                let prevMonthDate = new Date(startOf.getFullYear(), startOf.getMonth(), 0)
                for (let i = 0; i < startOf.getDay() - 1; i++){
                    prevMonthDate = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), prevMonthDate.getDate() - i)
                    row.push(prevMonthDate)
                }
                row.push(startOf)
                tempMatrix.push(row)
            } else {
                if (tempMatrix[tempMatrix.length - 1].length < 7) {
                    tempMatrix[tempMatrix.length - 1].push(startOf)
                } else {
                    tempMatrix.push([startOf])
                }
            }

            startOf = new Date(dateRender.getFullYear(), dateRender.getMonth(), startOf.getDate() + 1)
        }

        if (tempMatrix[tempMatrix.length - 1].length < 7) {
            let nextMonthDate = new Date(startOf.getFullYear(), startOf.getMonth() + 1, 1)
            let max = 7 - tempMatrix[tempMatrix.length - 1].length 
            for (let i = 1; i <= max; i++){
                nextMonthDate = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), i)
                tempMatrix[tempMatrix.length - 1].push(nextMonthDate)
            }
        }
        
        setMatrix(tempMatrix)

        if (isOpenedFullEditor) {
            setIsOpenedFullEditor(false)
        }
    }, [dateRender])
    
    const changeDateRender = (isNext: boolean) => {
        const year = dateRender.getFullYear()
        const month = dateRender.getMonth()
        setDateRender(new Date(year, month + (isNext ? 1 : -1), 1))
    }

    return (
        <div className='system_calendar'>
            <div className='bar'>
                <button onClick={() => changeDateRender(false)}>Prev</button>
                <DateBar onClick={() =>  setIsOpenedFullEditor(!isOpenedFullEditor)} dateRender={dateRender} format={props?.gui?.dates?.renderDate?.format} />
                <button onClick={() => changeDateRender(true)}>Next</button>
            </div>
            {isOpenedFullEditor ? <div>
                {props?.gui?.dates?.renderDate?.bar?.month?.isCanEdit && MONTHS.map((month, index) => 
                    <button onClick={( ) => setDateRender(new Date(dateRender.getFullYear(), index, 1))}>{ month}</button>
                )}
            </div> : <table>
                <thead>
                        <tr>
                        {props?.gui?.daysOfWeek && props?.gui?.daysOfWeek?.length ? props?.gui?.daysOfWeek.map(day => 
                            <th>{day}</th>
                        ) : DAYSOFWEEK.map(day => 
                            <th>{day}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {matrix?.map(row =>
                        <tr>
                            {row.map(item =>
                                <th style={{ color: !item ? 'none' : new Date(item).getMonth() !== dateRender.getMonth() ? "grey" : "black" }}>{item && new Date(item).getDate()}</th>    
                            )}
                        </tr>    
                    )}
                </tbody>
            </table>}
          
        </div>
    )
}


export default DatePicker