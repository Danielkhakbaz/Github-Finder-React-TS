import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { MdOutlineHome, MdInfoOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="navbar shadow-lg bg-gray-900 text-neutral-content">
        <div className="container mx-auto flex justify-between p-2">
          <Link to="/">
            <button className="link link-hover">
              <GoMarkGithub className="text-xl inline lg:text-3xl" />
              <span className="font-bold hidden ml-2 lg:inline">
                Github Finder
              </span>
            </button>
          </Link>
          <div className="flex justify-end">
            <Link to="/">
              <button className="btn btn-ghost btn-sm rounded-btn">
                <MdOutlineHome className="text-base inline lg:text-xl" />
                <span className="text-xs ml-0.5 xl:text-base xl:ml-1">
                  Home
                </span>
              </button>
            </Link>
            <Link to="/about">
              <button className="btn btn-ghost btn-sm rounded-btn ml-1">
                <MdInfoOutline className="text-base inline lg:text-xl" />
                <span className="text-xs ml-0.5 xl:text-base xl:ml-1">
                  About
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
