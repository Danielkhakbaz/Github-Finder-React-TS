import { StateTypes, ActionTypes } from "../../types/alertReducerTypes";
import { Actions } from "./AlertActions";

export const AlertReducer = (_state: StateTypes, action: ActionTypes) => {
  switch (action.type) {
    case Actions.SET_ALERT:
      return action.payload;
    case Actions.REMOVE_ALERT:
      return null;
    default:
      break;
  }
};
