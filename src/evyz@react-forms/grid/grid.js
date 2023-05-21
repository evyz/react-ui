import React, { useEffect, useState } from "react";
import "./grid.css";
import Input from "../inputs/input";
import useDebouncedFunction from "../utils/useDebouce";

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
  enableDebounce,
  debounceSettings,
}) => {
  const [cells, setCells] = useState([]);
  const [isIniting, setIsIniting] = useState(true);
  const [fastSearchValue, setFastSearchValue] = useState("");
  const [value, setValue] = useState("");

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

  const setNewValue = () => {
    setFastSearchValue(value);
    setGridFilter((prev) => {
      return { ...prev, fastSearch: { value: fastSearchValue } };
    });
  };
  let debounced = useDebouncedFunction(
    setNewValue,
    debounceSettings?.delay ? debounceSettings?.delay : 300
  );

  const recalculateGridSettings = (e) => {
    if (enableDebounce) {
      setValue(e.target.value);
      debounced();
    } else {
      setValue(e.target.value);
      setNewValue();
    }
  };

  if (!isIniting) {
    return <div></div>;
  }

  return (
    <div className='system_grid'>
      {isHasFastSearch && (
        <Input
          onInput={(e) => {
            recalculateGridSettings(e);
          }}
          onBlur={(e) => {
            setValue(e.target.value);
            setNewValue();
          }}
          value={value}
        />
      )}
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
          {!isLoading ? (
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
            ))
          ) : (
            <tr>
              <h3>Загрузка, пожалуйста подождите...</h3>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
