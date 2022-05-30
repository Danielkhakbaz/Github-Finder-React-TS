import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "404 | Github Finder";
  });

  return (
    <>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <strong className="text-5xl lg:text-8xl">Oops!</strong>
            <p className="text-3xl my-10 lg:text-4xl">404 - Page not found!</p>
            <Link to="/">
              <button className="btn btn-primary btn-sm xl:btn-lg">
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
