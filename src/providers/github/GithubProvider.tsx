import { useReducer } from "react";
import { GithubReducer } from "./GithubReducer";
import { GithubContext } from "./GithubContext";
import { ChildrenTypes } from "../../types/childrenTypes";
import { Actions } from "./Actions";

const GithubProvider = ({ children }: ChildrenTypes) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();

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

  const setLoading = () => {
    dispatch({
      type: Actions.SET_LOADING,
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
