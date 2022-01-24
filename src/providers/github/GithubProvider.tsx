import { useReducer } from "react";
import { GithubReducer } from "./GithubReducer";
import { GithubContext } from "./GithubContext";
import { Actions } from "./Actions";

interface GithubProviderProps {
  children: React.ReactNode;
}

const GithubProvider = ({ children }: GithubProviderProps) => {
  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    dispatch({
      type: Actions.GET_USERS,
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
