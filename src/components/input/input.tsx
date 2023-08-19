import * as React from 'react'
import { InputOptions } from './src/input.types'
import initStates from './src/initStates';
import events from './src/events';
import methods from './src/methods';

const Input = (props: InputOptions) => {

    const { isFocused, setIsFocused, errorRef, errorRefOffsetHeigth, setErrorRefOffsetHeigth } = initStates()
    const {recalculateErrorLabel} = methods({...props, errorRef, setErrorRefOffsetHeigth})
    const { onBlur, onFocus, onInput } = events({ ...props, isFocused, setIsFocused, recalculateErrorLabel })
    
    return (
        <div
            className={
                `${props?.enableClassNameBase ? "system_input " : " "} ${props?.error?.status ? "system_error" : ""} ${
                isFocused ? "system_focused" : ""
                } ${props?.validation?.disabled?.custom ? "disabled" : ""}`
            }
            style={{
                marginBottom: props?.error?.status ? errorRefOffsetHeigth : 0,
                ...props?.styles
        }}>
            <input
                disabled={props?.validation?.disabled?.custom}
                onInput={onInput}
                onFocus={onFocus}
                value={props?.state?.value}
                onChange={(e) =>
                props?.state?.setValue && props?.state?.setValue(e.target.value)
                }
                onBlur={onBlur}
                placeholder={props?.gui?.label}
                {...props?.gui?.input}
            />
            <label
                ref={errorRef}
                style={{
                bottom: props?.error?.status ? errorRefOffsetHeigth ? errorRefOffsetHeigth * -1 : 0: 0,
                opacity: props?.error?.status ? 1 : 0,
                }}>
                {props?.error?.message}
            </label>
        </div>
    )
}

export default Input