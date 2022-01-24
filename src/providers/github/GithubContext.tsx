import { createContext, useContext } from "react";

interface UsersType {
  avatar_url: string;
  id: number;
  login: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
}

interface DefaultType {
  users?: Array<UsersType>;
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
