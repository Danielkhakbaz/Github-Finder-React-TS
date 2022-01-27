import { Link } from "react-router-dom";
import { FaArrowLeft, FaUsers, FaUserFriends, FaCodepen } from "react-icons/fa";

const UserInfo = ({ user }: any) => {
  const {
    name,
    type,
    avatar_url: avatarURL,
    location,
    bio,
    blog,
    twitter_username: twitterUsername,
    login,
    html_url: htmlURL,
    followers,
    following,
    public_repos: publicRepos,
    hireable,
  } = user;

  return (
    <>
      <div className="mb-4">
        <Link className="btn btn-ghost" to="/">
          <FaArrowLeft className="mr-2" />
          <span>Back To Search</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 mb-6 xl:grid-cols-3 lg:grid-cols-3">
        <div className="flex justify-between lg:flex-col">
          <div>
            <h1 className="card-title text-4xl">{name}</h1>
            <div className="card-title">
              <div className="ml-2 mr-1 badge badge-success">{type}</div>
              {hireable && (
                <div className="mx-1 badge badge-info">Hireable</div>
              )}
            </div>
            <p className="text-lg font-semibold">{bio}</p>
          </div>
          <div className="card-actions">
            <a
              className="btn btn-outline btn-md"
              href={htmlURL}
              target="_blank"
              rel="noreferrer">
              Visit Github Profile
            </a>
          </div>
        </div>
        <div />
        <div className="custom-card-image mt-4 lg:mt-0">
          <div className="card image-full rounded-lg shadow-xl">
            <figure>
              <img src={avatarURL} alt="image" />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title">{name}</h2>
              <p>{login}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 mb-6">
        <div className="w-full rounded-lg shadow-md bg-base-100 stats">
          {location && (
            <div className="stat">
              <div className="stat-title text-md">Location</div>
              <div className="text-lg stat-value">{location}</div>
            </div>
          )}
          {blog && (
            <div className="stat">
              <div className="stat-title text-md">Website</div>
              <div className="text-lg stat-value">
                <a href={`https://${blog}`} target="_blank" rel="noreferrer">
                  {blog}
                </a>
              </div>
            </div>
          )}
          {twitterUsername && (
            <div className="stat">
              <div className="stat-title text-md">Twitter</div>
              <div className="text-lg stat-value">
                <a
                  href={`https://twitter.com/${twitterUsername}`}
                  target="_blank"
                  rel="noreferrer">
                  {twitterUsername}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl hidden md:text-5xl lg:block" />
          </div>
          <div className="stat-title pr-5">Folllowers</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {followers}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl hidden md:text-5xl lg:block" />
          </div>
          <div className="stat-title pr-5">Folllowing</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {following}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCodepen className="text-3xl hidden md:text-5xl lg:block" />
          </div>
          <div className="stat-title pr-5">Public Repos</div>
          <div className="stat-value pr-5 text-3xl md:text-4xl">
            {publicRepos}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
