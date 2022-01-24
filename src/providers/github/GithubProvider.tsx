import { useState } from "react";
import { GithubContext } from "./GithubContext";
import { UserProps } from "../../types/usersTypes";

interface GithubProviderProps {
  children: React.ReactNode;
}

const GithubProvider = ({ children }: GithubProviderProps) => {
  const [users, setUsers] = useState<Array<UserProps>>([]);
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
