import { UserTypes } from "./userTypes";

export type StateTypes = {
  users?: Array<UserTypes>;
  user?: any;
  repos?: any;
  loading?: boolean;
};

export type ActionTypes = {
  type: string;
  payload?: Array<UserTypes>;
};
