import { Link } from "react-router-dom";

interface UserItemType {
  avatar_url: string;
  id: number;
  login: string;
  followers_url: string;
  following_url: string;
  repos_url: string;
}

interface UserItemProps {
  user: UserItemType;
}

const UserItem = ({
  user: { avatar_url: avatarURL, login: username },
}: UserItemProps) => {
  return (
    <>
      <div className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatarURL} alt="Github profile picture" />
            </div>
          </div>
          <div>
            <h2 className="card-title">{username}</h2>
            <Link className="link-hover" to={`/users/${username}`}>
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
