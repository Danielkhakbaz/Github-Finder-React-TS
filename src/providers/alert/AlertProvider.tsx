import { useReducer } from "react";
import { AlertReducer } from "./AlertReducer";
import { AlertContext } from "./AlertContext";
import { ChildrenTypes } from "../../types/childrenTypes";
import { Actions } from "./AlertActions";

const AlertProvider = ({ children }: ChildrenTypes) => {
  const initialState = {
    alert: {
      message: "",
      type: "",
    },
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (message: string, type: string) => {
    dispatch({
      type: Actions.SET_ALERT,
      payload: { message, type },
    });
  };

  const removeAlert = () => {
    dispatch({
      type: Actions.REMOVE_ALERT,
    });
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
