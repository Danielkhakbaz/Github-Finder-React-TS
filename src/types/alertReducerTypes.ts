// import { Actions } from "../providers/alert/AlertActions";
import { AlertTypes } from "../types/alertTypes";

export type StateTypes = {
  alert?: AlertTypes;
};

export type ActionTypes = {
  type: string;
  payload?: any;
};
