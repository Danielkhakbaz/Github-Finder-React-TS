import { GithubAxios } from "../../services/axios/axios.config";

export const getUser = async (username: string) => {
  const { data } = await GithubAxios.get(`/users/${username}`, {});

  return data;
};

export const getUserRepos = async (username: string) => {
  const { data } = await GithubAxios.get(`/users/${username}/repos`, {});

  return data;
};

export const searchUsers = async (searchValue: string) => {
  const params = new URLSearchParams({
    q: searchValue,
  });

  const { data } = await GithubAxios.get(`/search/users?${params}`, {});

  return data.items;
};
