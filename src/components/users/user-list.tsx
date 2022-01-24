import UserItem from "./user-item";
import Spinner from "../spinner/spinner";
import { useGithubContext } from "../../providers/github/GithubContext";

const UserList = () => {
  const { users, loading } = useGithubContext();

  return (
    <>
      {!loading ? (
        <section className="grid grid-cols-1 gap-8 xl:grid_cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users?.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UserList;
