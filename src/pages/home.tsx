import { useEffect } from "react";
import CorsButton from "../components/cors/cors-button";
import UserSearch from "../components/users/user-search";
import UserList from "../components/users/user-list";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Github Finder";
  });

  return (
    <>
      <CorsButton />
      <UserSearch />
      <UserList />
    </>
  );
};

export default Home;
