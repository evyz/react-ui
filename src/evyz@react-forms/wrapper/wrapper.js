import React from "react";
import "./wrapper.css";

class Logs {
  constructor(showDate) {
    this.showDate = showDate ? showDate : true
  }

  log(message) {
    const time = message?.time ? message?.time : new Date().toISOString();
    if (message?.type) {
      if (this.showDate) {
          return console.log(time, message.type, message.message)
      }
      console.log(message.type, message.message)
    } else {
      if (this.showDate) {
         return console.log(time, message)
      }
      console.log(time, message)
    }
  }
  error(message) {
    const time = message?.time ? message?.time : new Date().toISOString();
    if (message?.type) {
      if (this.showDate) {
          return console.error(time, message.type, message.message)
      }
      console.error(message.type, message.message)
    } else {
      if (this.showDate) {
         return console.error(time, message)
      }
      console.error(time, message)
    }
  }
}

const core = class  {
  constructor() {
    this._isActive = false
    this._subscribersToLogs = []
    this.console = new Logs()
  } 
  activeWorkspace = function () {
    this._isActive = !this._isActive
    return this._isActive
  }

  findWidget(args) {
    if (!this._isActive) return
    console.log(args)
  }     

  subscribeToWatchWidget(args) {
    const { widgetId } = args
    if (!widgetId) {
      throw new Error("write widgetId")
    }

    let newSub = this.createSub({ id: widgetId, type: "logs" })

    return newSub
  }

  createSub(args) {
    const { id, type } = args
    if (!id || !type) {
      throw new Error("Not found on of args")
    }
    let sub = { id, type }
    if (type === "logs") {
      this._subscribersToLogs.push(sub)
    }
    return sub
  }
}

const Wrapper = ({ children, isDarkMode, useCoreConsole }) => {
  if (useCoreConsole) {
    window.core = new core()
  }

  return (
    <div
      className={"system_wrapper " + `${isDarkMode ? "system_mode-dark" : ""}`}
    >
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
