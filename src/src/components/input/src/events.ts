export default (props : any) => {
    const onFocus = (event: any) => {
        props?.setIsFocused(true);
        props?.events?.onFocus && props?.events?.onFocus(event);
    };

    const onInput = (event: any) => {
        props?.events?.onInput && props?.events?.onInput(event);
    };

    const onBlur = (event: any) => {
        props?.setIsFocused(false);
        if (props?.validation?.depsValidation?.notNull) {
        if (!props?.state?.value) {
            props?.recalculateErrorLabel();
            if (props?.setError)
            props?.setError({ status: true, message: "Fill in the field" });
            return;
        }
        }
        props?.events?.onBlur && props?.events?.onBlur(event);
        props?.recalculateErrorLabel();
        if (props?.setError)
        props?.setError({ status: false, message: "It`s okay" });
    };

    return {onFocus, onInput, onBlur}
}