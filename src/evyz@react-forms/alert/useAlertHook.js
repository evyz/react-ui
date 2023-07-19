function useAlertHook(alertRef) {
    return {
        handleClose: () => {
            if (alertRef.current.classList.contains("on_close")) {
                return;
            }
            alertRef.current.classList.add("on_close");
            alertRef.current.style.display = "none";
        }
    }
}

 export default useAlertHook