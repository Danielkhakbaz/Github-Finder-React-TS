import RepoItem from "./repo-item";
import { Repo } from "../../types/repo";

const RepoList = ({ repos }: any) => {
  return (
    <>
      <div className="card bg-base-100 rounded-lg shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold my-4 lg:text-3xl">
            Lastest Repositories
          </h2>
          {repos?.map((repo: Repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RepoList;
