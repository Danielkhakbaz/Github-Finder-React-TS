import { Actions } from "../providers/alert/AlertActions";
import { AlertTypes } from "../types/alertTypes";

export interface StateTypes {
  alert?: AlertTypes;
}

export interface ActionTypes {
  type?: Actions;
  payload?: AlertTypes;
}
