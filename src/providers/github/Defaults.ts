import { UserTypes, UserDefaultValues } from "../../types/userTypes";
import { RepoItemTypes } from "../../types/repoTypes";

interface DefaultType {
  users?: Array<UserTypes>;
  user?: UserTypes;
  repos?: Array<RepoItemTypes>;
  loading?: boolean;
}

export const defaultContextValue: DefaultType = {
  users: [],
  user: UserDefaultValues,
  repos: [],
  loading: true,
};

interface DefaultActionsContextType {
  dispatch?: any;
}

export const defaultActionsContextValue: DefaultActionsContextType = {
  dispatch: () => {},
};
