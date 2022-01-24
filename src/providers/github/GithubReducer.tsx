import { Actions } from "./Actions";
import { StateType, ActionType } from "../../types/reducerTypes";

export const GithubReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case Actions.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
