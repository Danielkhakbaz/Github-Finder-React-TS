export type UserProps = {
  avatar_url: string;
  id: number;
  login: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
};

export type UserItemProps = {
  user: UserProps;
};
