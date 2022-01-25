import { createContext, useContext } from "react";
import { DefaultAlertContextType } from "../../types/alertContextTypes";

const defaultAlertContextValue: DefaultAlertContextType = {
  alert: {
    message: "",
    type: "",
  },
  setAlert: () => {},
  removeAlert: () => {},
};

export const AlertContext = createContext(defaultAlertContextValue);

export const useAlertContext = () => {
  return useContext(AlertContext);
};
