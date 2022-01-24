import { Actions } from "./Actions";
import { StateTypes, ActionTypes } from "../../types/reducerTypes";

export const GithubReducer = (state: StateTypes, action: ActionTypes) => {
  switch (action.type) {
    case Actions.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case Actions.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
