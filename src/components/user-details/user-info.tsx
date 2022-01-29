import { Link } from "react-router-dom";
import { FaArrowLeft, FaUsers, FaUserFriends } from "react-icons/fa";

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
    hireable,
  } = user;

  return (
    <>
      <div className="mb-4">
        <Link className="btn btn-ghost btn-sm lg:btn-md" to="/">
          <FaArrowLeft className="mr-2" />
          <span>Back To Search</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 mb-6 lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col justify-between lg:flex-col">
          <div>
            <div className="flex items-center lg:block">
              <h1 className="card-title text-2xl lg:text-4xl">{name}</h1>
              <div className="card-title">
                <div className="badge badge-success mr-1 ml-2">{type}</div>
                {hireable && (
                  <div className="badge badge-info mx-1">Hireable</div>
                )}
              </div>
            </div>
            <p className="w-full text-lg font-semibold">{bio}</p>
          </div>
          <div className="card-actions justify-center lg:justify-start">
            <a
              className="btn btn-outline btn-xs w-1/2 text-center lg:btn-md"
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
              <img src={avatarURL} alt="User's github profile picture" />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title">{name}</h2>
              <p>{login}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 mb-6">
        <div className="stats w-full bg-base-100 rounded-lg shadow-md">
          {location && (
            <div className="stat">
              <div className="stat-title text-sm lg:text-base">Location</div>
              <div className="stat-value text-base lg:text-lg ">{location}</div>
            </div>
          )}
          {blog && (
            <div className="stat">
              <div className="stat-title text-sm lg:text-base">Website</div>
              <div className="stat-value text-base lg:text-lg ">
                <a href={`https://${blog}`} target="_blank" rel="noreferrer">
                  {blog}
                </a>
              </div>
            </div>
          )}
          {twitterUsername && (
            <div className="stat">
              <div className="stat-title text-sm lg:text-base">Twitter</div>
              <div className="stat-value text-base lg:text-lg ">
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
      <div className="stats w-full bg-base-100 rounded-lg shadow-md py-5 mb-6">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl hidden md:text-5xl lg:block" />
          </div>
          <div className="stat-title text-sm pr-5 lg:text-base">Folllowers</div>
          <div className="stat-value text-base pr-5 lg:text-lg">
            {followers}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl hidden md:text-5xl lg:block" />
          </div>
          <div className="stat-title text-sm pr-5 lg:text-base">Folllowing</div>
          <div className="stat-value text-base pr-5 lg:text-lg">
            {following}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
