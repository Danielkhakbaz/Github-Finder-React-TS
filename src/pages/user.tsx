import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  useGithubContext,
  useGithubAction,
} from "../providers/github/github-context";
import { getUser, getUserRepos } from "../providers/github/github-actions";
import { Actions } from "../providers/github/Actions";
import UserInfo from "../components/user-details/user-info";
import RepoList from "../components/user-details/repo-list";
import Spinner from "../components/spinner/spinner";

const User: React.FC = () => {
  const { user, repos, loading } = useGithubContext();
  const { dispatch } = useGithubAction();

  const { username } = useParams() as { username: string };

  useEffect(() => {
    document.title = `${username} | Github Finder`;

    const fetchData = async () => {
      const user = await getUser(username);
      dispatch({ type: Actions.GET_USER, payload: user });

      const repos = await getUserRepos(username);
      dispatch({ type: Actions.GET_REPOS, payload: repos });
    };

    dispatch({ type: Actions.SET_LOADING });

    fetchData();
  }, []);

  return (
    <>
      {!loading ? (
        <div className="mx-auto">
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
