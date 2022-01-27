import { useReducer } from "react";
import { ChildrenTypes } from "../../types/childrenTypes";
import { GithubReducer } from "./GithubReducer";
import { Actions } from "./Actions";
import { GithubContext } from "./GithubContext";

const GithubProvider = ({ children }: ChildrenTypes) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getUser = async (username: string) => {
    setLoading();

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${username}`,
      {
        headers: {
          Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();

    dispatch({
      type: Actions.GET_USER,
      payload: data,
    });
  };

  const getUserRepos = async (username: string) => {
    setLoading();

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${username}/repos`,
      {
        headers: {
          Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();

    dispatch({
      type: Actions.GET_REPOS,
      payload: data,
    });
  };

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
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        getUser,
        getUserRepos,
        searchUsers,
        clearUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
