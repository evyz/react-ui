import React, { useRef, useState } from "react";
import "./collapse.css";

const Collapse = ({ children, label }) => {
  const [isActive, setIsActive] = useState(false);

  const childrenRef = useRef();

  return (
    <div
      className={`system_collapse ${isActive ? "" : "disabled"}`}
      style={{
        height: isActive ? 40 + childrenRef?.current?.clientHeight : 40,
      }}
    >
      <button onClick={() => setIsActive(!isActive)}>{label}</button>
      <div ref={childrenRef}>{children}</div>
    </div>
  );
};
export default Collapse;
