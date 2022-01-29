export type RepoTypes = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  forks: number;
  open_issues: number;
  watchers_count: number;
  stargazers_count: number;
};

export type RepoItemTypes = {
  repo: RepoTypes;
};
