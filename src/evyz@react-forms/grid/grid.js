import React, { useEffect, useState } from "react";
import "./grid.css";
import Input from "../inputs/input";

const Cell = ({ children, item, cell }) => {
  if (cell?.widget !== "input") {
    switch (cell?.widget) {
      case "checkbox":
        return <input type={"checkbox"} checked={children} disabled={true} />;
      default:
        return <div>{children}</div>;
    }
  }
  return <div>{String(children)}</div>;
};

const Grid = ({
  data,
  gridSettings,
  gridFilter,
  setGridFilter,
  isLoading,
  isHasFastSearch,
}) => {
  const [cells, setCells] = useState([]);
  const [isIniting, setIsIniting] = useState(true);
  const [fastSearchValue, setFastSearchValue] = useState("");

  useEffect(() => {
    if (!Array.isArray(gridSettings)) {
      throw new Error("GRID_SETTINGS must be array");
    }

    if (gridSettings && gridSettings.length > 0) {
      setCells(
        gridSettings.map((setting) => {
          return {
            name: setting.name,
            value: setting.value,
            width: setting.width ? setting.width : 150,
            isCanSort: setting?.isCanSort ? true : false,
            widget: setting?.widget ? setting?.widget : "input",
          };
        })
      );
    }

    setIsIniting(false);
  }, [gridSettings]);

  const recalculateGridSettings = () => {
    setGridFilter((prev) => {
      return { ...prev, fastSearch: { value: fastSearchValue } };
    });
  };

  return (
    <div className='system_grid'>
      {isHasFastSearch && (
        <Input
          onBlur={recalculateGridSettings}
          value={fastSearchValue}
          setValue={setFastSearchValue}
        />
      )}

      {isIniting && "Пожалуйста, подождите"}
      <table>
        <thead>
          <tr>
            {cells &&
              cells.length > 0 &&
              cells.map((cell) => (
                <td style={{ width: cell?.width }}>
                  {cell?.name}
                  {cell?.isCanSort && (
                    <button
                      onClick={() => {
                        setGridFilter((prev) => {
                          return {
                            ...prev,
                            sort: {
                              field: cell?.value,
                              value:
                                gridFilter?.sort &&
                                gridFilter?.sort?.field === cell?.value &&
                                gridFilter?.sort?.value === "ASC"
                                  ? "DESC"
                                  : "ASC",
                            },
                          };
                        });
                      }}
                      className={`system_sort_ico ${
                        gridFilter?.sort &&
                        gridFilter?.sort?.field === cell?.value &&
                        "active"
                      } ${
                        gridFilter?.sort &&
                        gridFilter?.sort?.field === cell?.value &&
                        gridFilter?.sort?.value === "ASC"
                          ? ""
                          : "reversed"
                      }`}
                    ></button>
                  )}
                </td>
              ))}
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            data &&
            data.length > 0 &&
            data.map((item) => (
              <tr>
                {cells &&
                  cells.length > 0 &&
                  cells.map((cell) => (
                    <td style={{ width: cell?.width }}>
                      <Cell cell={cell} item={item}>
                        {item[cell?.value]}
                      </Cell>
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
