import React from "react";

export default () => {
    const [isActive, setIsActive] = React.useState(false);

    return {isActive, setIsActive}
}