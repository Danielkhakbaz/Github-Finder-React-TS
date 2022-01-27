export type RepoTypes = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  forks: number;
  open_issuses: number;
  watchers_count: number;
  stargazers_count: number;
};

export type RepoItemTypes = {
  repo: RepoTypes;
};

export type ReposItemTypes = {
  repos: Array<RepoItemTypes>;
};
