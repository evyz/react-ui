import { ButtonOptions } from "../button.types";

interface useButtonHandlerInterface extends ButtonOptions{
    setIsLocalLoader: Function;
}

const useButtonHandler = (props : useButtonHandlerInterface) => {
    return { buttonHandler: (event: React.MouseEvent<HTMLElement>) => {
        if (props?.gui?.loader?.promiseLoader) {
          props?.setIsLocalLoader(true);
          props?.events?.onClick &&
            props?.events?.onClick().then(() => {
                props?.setIsLocalLoader(false);
            });
          return;
        }
        props?.events?.onClick && props?.events?.onClick(event);
      }
    }
}

export default useButtonHandler