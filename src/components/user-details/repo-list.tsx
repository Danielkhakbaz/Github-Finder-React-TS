import RepoItem from "./repo-item";
import { RepoTypes } from "../../types/repoTypes";

const RepoList = ({ repos }: any) => {
  return (
    <>
      <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl my-4 font-bold card-title">
            Lastest Repositories
          </h2>
          {repos?.map((repo: RepoTypes) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RepoList;
