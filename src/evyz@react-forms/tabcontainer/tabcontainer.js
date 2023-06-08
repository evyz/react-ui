import React, { useEffect, useRef, useState } from "react";
import "./tabcontainer.css";

const Tabcontainer = ({ chapters, value, setValue }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [folders, setFolder] = useState([])

  useEffect(() => {
    setFolder(chapters)
  }, [chapters])

  useEffect(() => {
    if (folders && folders.length) {
      let currentFolder = folders.find(folder => folder.id === activeTab)
      if (currentFolder) {
        if (currentFolder.onBeforeInit) {
          currentFolder.onBeforeInit()
        }
      }
    }
  }, [activeTab])

  return (
    <div className={`system_tabcont`}>
      <div className={`system_tabcont_folders`}>
        {folders && folders.length && folders.map((folder) => (
          <div
            key={folder.id}
            onClick={() => setActiveTab(folder.id)}
            className={`system_tabcont_folder ${(folder.id === activeTab || (activeTab === null && (folder.id === 1 || folders.findIndex(check => check.id === folder.id) === 0))) ? 'active': ''}`}
          >
            {folder.title}
          </div>
        ))}
      </div>
      <div className={`system_tabcont_pages_container`}>
        {folders && folders.length && activeTab === null ? folders[0].elem : folders.find(folder => folder.id === activeTab)?.elem}
      </div>
    </div>
  );
};

export default Tabcontainer;
