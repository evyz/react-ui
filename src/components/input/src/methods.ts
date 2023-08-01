export default (props: any) => {
    const recalculateErrorLabel = () => {
        let height = props?.errorRef?.current?.clientHeight;
        props?.setErrorRefOffsetHeigth(height);
    };

    return {recalculateErrorLabel}
}