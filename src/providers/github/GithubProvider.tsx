import { useReducer } from "react";
import { ChildrenTypes } from "../../types/childrenTypes";
import { GithubReducer } from "./GithubReducer";
import { GithubContext, GithubActionsContext } from "./GithubContext";

const GithubProvider = ({ children }: ChildrenTypes) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
      }}>
      <GithubActionsContext.Provider
        value={{
          dispatch,
        }}>
        {children}
      </GithubActionsContext.Provider>
    </GithubContext.Provider>
  );
};

export default GithubProvider;
