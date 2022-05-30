import { useEffect } from "react";
import UserSearch from "../components/users/user-search";
import UserList from "../components/users/user-list";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Github Finder";
  });

  return (
    <>
      <UserSearch />
      <UserList />
    </>
  );
};

export default Home;
