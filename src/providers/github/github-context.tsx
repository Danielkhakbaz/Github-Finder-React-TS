import { createContext, useContext } from "react";
import { UserTypes, UserDefaultValues } from "../../types/user";
import { RepoItemTypes } from "../../types/repo-item";

interface GithubContextTypes {
  users?: Array<UserTypes>;
  user?: UserTypes;
  repos?: Array<RepoItemTypes>;
  loading?: boolean;
}

export const GithubContextDefaultValue: GithubContextTypes = {
  users: [],
  user: UserDefaultValues,
  repos: [],
  loading: true,
};

interface GithubActionTypes {
  dispatch?: any;
}

export const GithubActionDefaultValue: GithubActionTypes = {
  dispatch: () => {},
};

export const GithubContext = createContext(GithubContextDefaultValue);
export const GithubAction = createContext(GithubActionDefaultValue);

export const useGithubContext = () => {
  return useContext(GithubContext);
};
export const useGithubAction = () => {
  return useContext(GithubAction);
};
