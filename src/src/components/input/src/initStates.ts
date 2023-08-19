import React from "react";

export default () => {
    const [isFocused, setIsFocused] = React.useState(false);
    const errorRef = React.useRef<HTMLLabelElement>(null);
    const [errorRefOffsetHeigth, setErrorRefOffsetHeigth] = React.useState<number | undefined>(0);

    return {isFocused, setIsFocused, errorRef, errorRefOffsetHeigth, setErrorRefOffsetHeigth}
}