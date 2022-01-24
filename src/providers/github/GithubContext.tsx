import { createContext, useContext } from "react";
import { UserProps } from "../../types/usersTypes";

interface DefaultType {
  users?: Array<UserProps>;
  loading?: boolean;
  fetchUsers: () => void;
}

const defaultValue: DefaultType = {
  users: [],
  loading: true,
  fetchUsers: () => {},
};

export const GithubContext = createContext(defaultValue);

export const useGithubContext = () => {
  return useContext(GithubContext);
};
