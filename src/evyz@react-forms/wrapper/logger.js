import React, { useContext, useEffect } from "react";
import { wrapperContext } from "./wrapper";

const Logger = () => {
  const core = useContext(wrapperContext);

  useEffect(() => {
    window.subscribe = function (args) {
      let { id, type } = args;
      if (type === "logs") {
        let sub = { id, type };
        core?.subscribersToLogs?.push(sub);
        console.log(core);
      }
    };
  }, []);

  console.log(core?.subscribersToLogs);

  return (
    <div>
      {core?.subscribersToLogs.map((sub) => (
        <li>{sub?.id}</li>
      ))}
    </div>
  );
};

export default Logger;
