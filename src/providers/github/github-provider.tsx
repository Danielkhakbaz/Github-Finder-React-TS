import { useReducer } from "react";
import { GithubReducer } from "./github-reducer";
import { GithubContext, GithubAction } from "./github-context";

type Props = {
  children: React.ReactNode;
};

const GithubProvider: React.FC<Props> = ({ children }: Props) => {
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
      <GithubAction.Provider
        value={{
          dispatch,
        }}>
        {children}
      </GithubAction.Provider>
    </GithubContext.Provider>
  );
};

export default GithubProvider;
