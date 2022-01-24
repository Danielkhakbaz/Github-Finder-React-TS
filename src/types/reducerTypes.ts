import { UserTypes } from "./userTypes";
import { Actions } from "../providers/github/Actions";

export interface StateTypes {
  users?: Array<UserTypes>;
  loading?: boolean;
}

export interface ActionTypes {
  type: Actions;
  payload?: Array<UserTypes>;
}
