import { Actions } from "../providers/github/Actions";

export interface StateType {
  users: any;
  loading: any;
}

export interface ActionType {
  type: Actions;
  payload: Array<any>;
}
