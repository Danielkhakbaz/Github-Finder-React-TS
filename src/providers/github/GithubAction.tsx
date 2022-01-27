export const getUser = async (username: string) => {
  const response = await fetch(`/users/${username}`, {
    headers: {
      Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();

  return data;
};

export const getUserRepos = async (username: string) => {
  const response = await fetch(`/users/${username}/repos`, {
    headers: {
      Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();

  return data;
};

export const searchUsers = async (searchValue: string) => {
  const params = new URLSearchParams({
    q: searchValue,
  });

  const response = await fetch(`/search/users?${params}`, {
    headers: {
      Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const { items } = await response.json();

  return items;
};
