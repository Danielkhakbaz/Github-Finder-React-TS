import { Link } from "react-router-dom";
import { UserItemTypes } from "../../types/userTypes";

const UserItem = ({
  user: { avatar_url: avatarURL, login: username },
}: UserItemTypes) => {
  return (
    <>
      <div className="card card-compact card-side bg-base-100 shadow-md">
        <div className="card-body flex-row items-center space-x-4">
          <div className="avatar">
            <div className="w-14 h-14 rounded-full shadow">
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
