import { useState, useEffect } from "react";
import UserItem from "./user-item";

interface UsersType {
  avatar_url: string;
  id: number;
  login: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
}

const UserList = () => {
  const [users, setUsers] = useState<Array<UsersType>>();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authentication: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    setUsers(data);
  };

  return (
    <>
      <section className="grid grid-cols-1 gap-8 xl:grid_cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users?.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </section>
    </>
  );
};

export default UserList;
