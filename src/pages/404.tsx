import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";

const NotFound = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <strong className="text-8xl">Oops!</strong>
            <p className="text-4xl my-10">404 - Page not found!</p>
            <Link to="/">
              <button className="btn btn-primary btn-lg">
                <MdOutlineHome className="text-2xl mr-1" />
                <span>Back to home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
