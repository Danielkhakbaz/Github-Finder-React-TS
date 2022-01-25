import { createContext, useContext } from "react";
import { AlertTypes } from "../../types/alertTypes";

interface DefaultType {
  alert: AlertTypes;
  setAlert: (message: any, type: any) => void;
  removeAlert: () => void;
}

const defaultValue: DefaultType = {
  alert: {
    message: "",
    type: "",
  },
  setAlert: () => {},
  removeAlert: () => {},
};

export const AlertContext = createContext(defaultValue);

export const useAlertContext = () => {
  return useContext(AlertContext);
};
