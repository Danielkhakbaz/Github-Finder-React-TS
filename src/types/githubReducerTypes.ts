import { UserTypes } from "./userTypes";

export type StateTypes = {
  users?: Array<UserTypes>;
  loading?: boolean;
};

export type ActionTypes = {
  type: string;
  payload?: Array<UserTypes>;
};
