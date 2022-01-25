import { useReducer } from "react";
import { ChildrenTypes } from "../../types/childrenTypes";
import { GithubReducer } from "./GithubReducer";
import { Actions } from "./GithubActions";
import { GithubContext } from "./GithubContext";

const GithubProvider = ({ children }: ChildrenTypes) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (searchValue: string) => {
    setLoading();

    const params = new URLSearchParams({
      q: searchValue,
    });

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
      {
        headers: {
          Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const { items } = await response.json();

    dispatch({
      type: Actions.GET_USERS,
      payload: items,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: Actions.CLEAR_USERS,
    });
  };

  const setLoading = () => {
    dispatch({
      type: Actions.SET_LOADING,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
