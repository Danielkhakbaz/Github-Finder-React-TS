export const getUser = async (username: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/users/${username}`,
    {
      headers: {
        Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );
  const data = await response.json();

  return data;
};

export const getUserRepos = async (username: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/users/${username}/repos`,
    {
      headers: {
        Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );
  const data = await response.json();

  return data;
};

export const searchUsers = async (searchValue: string) => {
  const params = new URLSearchParams({
    q: searchValue,
  });

  const response = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
    {
      headers: {
        Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );
  const { items } = await response.json();

  return items;
};
