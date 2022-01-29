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
          <div className="card-body p-4">
            <h3 className="text-base font-semibold mb-2 lg:text-xl">
              <FaLink className="inline mr-1" />
              {name}
            </h3>
            <p className="mb-3 hidden md:block">{description}</p>
            <div>
              <div className="badge badge-info badge-xs mr-2 lg:badge-lg">
                <FaEye className="mr-2" /> {watchersCount}
              </div>
              <div className="badge badge-success badge-xs mr-2 lg:badge-lg">
                <FaStar className="mr-2" /> {stargazersCount}
              </div>
              <div className="badge badge-error badge-xs mr-2 lg:badge-lg">
                <FaInfo className="mr-2" /> {openIssuses}
              </div>
              <div className="badge badge-warning badge-xs mr-2 lg:badge-lg">
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
