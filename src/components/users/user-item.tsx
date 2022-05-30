import { Link } from "react-router-dom";
import { UserItemTypes } from "../../types/user-item";

const UserItem: React.FC<UserItemTypes> = ({
  user: { avatar_url: avatarURL, login: username },
}: UserItemTypes) => {
  return (
    <>
      <Link className="link-hover" to={`/user/${username}`}>
        <div className="card card-compact card-side bg-base-100 shadow-md">
          <div className="card-body flex-row items-center space-x-4">
            <div className="avatar">
              <div className="w-14 h-14 rounded-full shadow">
                <img src={avatarURL} alt="Github profile picture" />
              </div>
            </div>
            <div>
              <h2 className="card-title">{username}</h2>
              Visit Profile
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default UserItem;
