import { AlertTypes } from "./alertTypes";

export type DefaultAlertContextType = {
  alert: AlertTypes;
  setAlert: (message: string, type: string) => void;
  removeAlert: () => void;
};
