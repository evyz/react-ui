import React from "react";

export default () => {
    const childrenRef = React.useRef<any>(null);
    return {childrenRef}
}