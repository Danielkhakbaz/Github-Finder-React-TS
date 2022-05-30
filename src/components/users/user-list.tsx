import UserItem from "./user-item";
import Spinner from "../spinner/spinner";
import { useGithubContext } from "../../providers/github/github-context";

const UserList: React.FC = () => {
  const { users, loading } = useGithubContext();

  return (
    <>
      {!loading ? (
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid_cols-4">
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
