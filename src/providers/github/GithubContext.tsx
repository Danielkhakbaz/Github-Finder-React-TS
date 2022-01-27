import { createContext, useContext } from "react";
import { UserTypes, UserValues } from "../../types/userTypes";
import { RepoItemTypes } from "../../types/repoTypes";

interface DefaultType {
  users?: Array<UserTypes>;
  user?: UserTypes;
  repos?: Array<RepoItemTypes>;
  loading?: boolean;
  getUser: (username: string) => void;
  getUserRepos: (username: string) => void;
  searchUsers: (searchValue: string) => void;
  clearUsers: () => void;
}

const defaultValue: DefaultType = {
  users: [],
  user: UserValues,
  repos: [],
  loading: true,
  getUser: () => {},
  getUserRepos: () => {},
  searchUsers: () => {},
  clearUsers: () => {},
};

export const GithubContext = createContext(defaultValue);

export const useGithubContext = () => {
  return useContext(GithubContext);
};
