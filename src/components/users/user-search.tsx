import { useState } from "react";
import { useGithubActionsContext } from "../../providers/github/GithubContext";
import { searchUsers } from "../../providers/github/GithubAction";
import { Actions } from "../../providers/github/Actions";

const UserSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { dispatch } = useGithubActionsContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    dispatch({ type: Actions.SET_LOADING });
    const users = await searchUsers(searchValue);
    dispatch({ type: Actions.GET_USERS, payload: users });
  };

  const handleChange = (event: { target: { value: string } }) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    setSearchValue("");
    dispatch({ type: Actions.CLEAR_USERS });
  };

  return (
    <>
      <div className="flex justify-center my-12">
        <div className="w-3/5">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  className="input input-md input-bordered w-full text-black"
                  placeholder="Search..."
                  type="text"
                  value={searchValue}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-md w-36 absolute rounded-l-none top-0 right-0"
                  disabled={!searchValue}>
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <button
            className="btn btn-ghost btn-md w-full ml-2"
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
