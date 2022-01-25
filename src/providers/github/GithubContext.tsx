import { createContext, useContext } from "react";
import { UserTypes } from "../../types/userTypes";

interface DefaultType {
  users?: Array<UserTypes>;
  loading?: boolean;
  searchUsers: (searchValue: string) => void;
  clearUsers: () => void;
}

const defaultValue: DefaultType = {
  users: [],
  loading: true,
  searchUsers: () => {},
  clearUsers: () => {},
};

export const GithubContext = createContext(defaultValue);

export const useGithubContext = () => {
  return useContext(GithubContext);
};
