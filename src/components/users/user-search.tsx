import { useState } from "react";
import Alert from "../alert/alertError";
import { useAlertContext } from "../../providers/alert/AlertContext";
import { useGithubContext } from "../../providers/github/GithubContext";

const UserSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const { searchUsers, clearUsers } = useGithubContext();
  const { setAlert, removeAlert } = useAlertContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (searchValue == "") {
      setAlert("Please Enter something to search!", "error");
    } else {
      removeAlert();
      searchUsers(searchValue);
    }
  };

  const handleChange = (e: any) => {
    removeAlert();
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    removeAlert();
    setSearchValue("");
    clearUsers();
  };

  return (
    <>
      <Alert />
      <div className="flex justify-center my-12">
        <div className="w-3/5">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  className="input w-full input-md input-bordered text-black"
                  placeholder="Search..."
                  type="text"
                  value={searchValue}
                  onChange={handleChange}
                />
                <button className="btn btn-md w-36 absolute top-0 right-0 rounded-l-none">
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <button
            className="w-full btn btn-ghost btn-md ml-2"
            onClick={handleClick}
            disabled={!searchValue}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSearch;
