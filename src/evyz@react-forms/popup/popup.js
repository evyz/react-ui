import React from "react";
import { Cell, Row } from "../markup/markup";
import "./popup.css";

const Popup = ({ children, isActive, setIsActive }) => {
  if (isActive) {
    return (
      <Row
        className={"system_popup"}
        onClick={() => setIsActive && setIsActive(false)}
      >
        <Row
          onClick={(e) => {
            if (!e) {
              e = window.event;
            }
            e.stopPropagation();
          }}
        >
          <Cell
            style={{ background: "var(--main-popup-content-background)" }}
            size={11}
          >
            {children}
          </Cell>
        </Row>
      </Row>
    );
  }
};

export default Popup;
