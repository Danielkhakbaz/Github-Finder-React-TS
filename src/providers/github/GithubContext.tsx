import { createContext, useContext } from "react";
import { defaultContextValue, defaultActionsContextValue } from "./Defaults";

export const GithubContext = createContext(defaultContextValue);
export const GithubActionsContext = createContext(defaultActionsContextValue);

export const useGithubContext = () => {
  return useContext(GithubContext);
};
export const useGithubActionsContext = () => {
  return useContext(GithubActionsContext);
};
