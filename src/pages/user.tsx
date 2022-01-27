import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGithubContext } from "../providers/github/GithubContext";
import UserInfo from "../components/user-details/user-info";
import RepoList from "../components/user-details/repo-list";
import Spinner from "../components/spinner/spinner";

const User = () => {
  const { user, repos, loading, getUser, getUserRepos } = useGithubContext();

  const { username } = useParams() as { username: string };

  useEffect(() => {
    document.title = `${username} | Github Finder`;

    getUser(username);
    getUserRepos(username);
  }, []);

  return (
    <>
      {!loading ? (
        <div className="w-full mx-auto lg:w-10/12">
          <UserInfo user={user} />
          {repos?.length !== 0 && <RepoList repos={repos} />}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default User;
