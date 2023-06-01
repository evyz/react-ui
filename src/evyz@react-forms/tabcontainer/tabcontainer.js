import React, { useRef, useState } from "react";
import "./tabcontainer.css";
import { settings } from "./settings";

const Tab = ({ settings, setTabOptions }) => {
  const select = useRef(null);

  return (
    <>
      {settings.map((setting) => (
        <div
          key={setting.id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>{setting.title}</div>
          <select
            onChange={(e) =>
              setTabOptions(e.target.options.map((option) => option.text))
            }
            onClick={() => console.log(select.current[0])}
            ref={select}
          >
            {setting.options.map((option) => (
              <option onClick={(e) => console.log(e.target.value)}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </>
  );
};

const Tabcontainer = ({ setTabOptions }) => {
  const [activeTab, setActiveTab] = useState(null);

  const folders = settings?.map((sett) => ({
    id: sett.id,
    title: sett.title,
    elem: <Tab settings={sett.setting} setTabOptions={setTabOptions} />,
  }));

  return (
    <div className={`system_tabcont`}>
      <div className={`system_tabcont_folders`}>
        {folders.map((folder) => (
          <div
            key={folder.id}
            onClick={() => setActiveTab(folder.id)}
            className={`system_tabcont_folder`}
          >
            {folder.title}
          </div>
        ))}
      </div>
      <div className={`system_tabcont_pages_container`}>
        {activeTab === null ? folders[0].elem : folders[activeTab].elem}
        <div>
          <button onClick={() => console.log(1)}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Tabcontainer;
