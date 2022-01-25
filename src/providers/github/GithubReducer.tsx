import { Actions } from "./GithubActions";
import { StateTypes, ActionTypes } from "../../types/reducerTypes";

export const GithubReducer = (state: StateTypes, action: ActionTypes) => {
  switch (action.type) {
    case Actions.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case Actions.CLEAR_USERS:
      return {
        ...state,
        users: [],
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
