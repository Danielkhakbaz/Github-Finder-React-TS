import { useState } from "react";

const UserSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    setSearchValue("");
  };

  return (
    <>
      <div className="flex justify-center">
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
            className="btn btn-ghost btn-md ml-2"
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
