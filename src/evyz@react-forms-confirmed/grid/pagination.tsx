import * as React from "react";
import { GridOptions } from "./grid";

const useEvents = (props: GridOptions) => {
  return {
    onClickRow: (e: React.MouseEvent) => {
      props?.events?.row?.onClick && props?.events?.row?.onClick(e);
    },
    onClickCell: (e: React.MouseEvent, cell: {}) => {
      props?.events?.row?.onClick && props?.events?.row?.onClick(e, cell);
    },
  };
};

const usePaginationGrid = (props: GridOptions) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (props?.state?.value && props?.state?.value?.length) {
      setData(props?.state?.value);
    }
  }, [props?.state?.value]);

  const events = useEvents(props);

  return {
    data,
    setData,
    events,
  };
};

export { usePaginationGrid, useEvents };
