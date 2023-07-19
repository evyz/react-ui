export interface AlertEvents {
  events?: {
    onClick?: Function;
    content: {
      onClick?: Function;
      onCloseClick: Function;
    };
  };
}

const useEvents = (props: AlertEvents, alertRef: any) => {
  return {
    onCloseAlert: function (e: React.MouseEvent) {
      if (alertRef.current.classList.contains("on_close")) {
        return;
      }
      alertRef.current.classList.add("on_close");
      alertRef.current.style.display = "none";
      props?.events?.content?.onCloseClick &&
        props?.events?.content?.onCloseClick(e);
    },
  };
};

export default useEvents;
