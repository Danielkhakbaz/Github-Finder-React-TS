import RepoItem from "./repo-item";

const RepoList = ({ repos }: any) => {
  return (
    <>
      <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl my-4 font-bold card-title">
            Lastest Repositories
          </h2>
          {repos?.map(
            (repo: {
              id: any;
              name: string;
              description: string;
              html_url: string;
              forks: number;
              open_issuses: number;
              watchers_count: number;
              stargazers_count: number;
            }) => (
              <RepoItem key={repo.id} repo={repo} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default RepoList;
