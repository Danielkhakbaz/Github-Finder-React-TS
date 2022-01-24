import { createContext, useContext } from "react";
import { UserTypes } from "../../types/userTypes";

interface DefaultType {
  users?: Array<UserTypes>;
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
