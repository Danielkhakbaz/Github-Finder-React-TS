import { Actions } from "./AlertActions";

export const AlertReducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SET_ALERT:
      return action.payload;
    case Actions.REMOVE_ALERT:
      return null;
    default:
      break;
  }
};
