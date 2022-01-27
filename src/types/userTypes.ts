export type UserTypes = {
  avatar_url: string;
  id: number;
  login: string;
  name: string;
  type: string;
  location: string;
  bio: string;
  blog: string;
  twitter_username: string;
  html_url: string;
  followers: string;
  following: string;
  public_repos: string;
  hireable: string;
};

export const UserValues = {
  avatar_url: "",
  id: 0,
  login: "",
  name: "",
  type: "",
  location: "",
  bio: "",
  blog: "",
  twitter_username: "",
  html_url: "",
  followers: "",
  following: "",
  public_repos: "",
  hireable: "",
};

export type UserItemTypes = {
  user: UserTypes;
};
