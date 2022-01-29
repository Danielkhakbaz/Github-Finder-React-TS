import { FaLink, FaEye, FaStar, FaInfo, FaUtensils } from "react-icons/fa";
import { RepoItemTypes } from "../../types/repoTypes";

const RepoItem = ({ repo }: RepoItemTypes) => {
  const {
    name,
    description,
    html_url: htmlURL,
    forks,
    open_issues: openIssuses,
    watchers_count: watchersCount,
    stargazers_count: stargazersCount,
  } = repo;

  return (
    <>
      <a href={htmlURL} target="_blank" rel="noreferrer">
        <div className="card bg-gray-300 rounded-md mb-2 hover:bg-gray-400">
          <div className="card-body">
            <h3 className="text-xl font-semibold mb-2">
              <FaLink className="inline mr-1" />
              {name}
            </h3>
            <p className="mb-3 hidden md:block">{description}</p>
            <div>
              <div className="badge badge-info badge-lg mr-2">
                <FaEye className="mr-2" /> {watchersCount}
              </div>
              <div className="badge badge-success badge-lg mr-2">
                <FaStar className="mr-2" /> {stargazersCount}
              </div>
              <div className="badge badge-error badge-lg mr-2">
                <FaInfo className="mr-2" /> {openIssuses}
              </div>
              <div className="badge badge-warning badge-lg mr-2">
                <FaUtensils className="mr-2" /> {forks}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default RepoItem;
