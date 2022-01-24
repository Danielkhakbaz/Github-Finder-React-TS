import { useState } from "react";
import { GithubContext } from "./GithubContext";

interface GithubProviderProps {
  children: React.ReactNode;
}

interface UsersType {
  avatar_url: string;
  id: number;
  login: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
}

const GithubProvider = ({ children }: GithubProviderProps) => {
  const [users, setUsers] = useState<Array<UsersType>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
