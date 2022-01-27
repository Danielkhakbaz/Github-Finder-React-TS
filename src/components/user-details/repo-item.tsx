import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
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
        <div className="mb-2 rounded-md card bg-gray-300 hover:bg-gray-400">
          <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">
              <FaLink className="inline mr-1" />
              {name}
            </h3>
            <p className="mb-3 hidden md:block">{description}</p>
            <div>
              <div className="mr-2 badge badge-info badge-lg">
                <FaEye className="mr-2" /> {watchersCount}
              </div>
              <div className="mr-2 badge badge-success badge-lg">
                <FaStar className="mr-2" /> {stargazersCount}
              </div>
              <div className="mr-2 badge badge-error badge-lg">
                <FaInfo className="mr-2" /> {openIssuses}
              </div>
              <div className="mr-2 badge badge-warning badge-lg">
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
