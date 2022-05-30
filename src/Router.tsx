import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";
import About from "./pages/about";
import NotFound from "./pages/404";
import { useGithubAction } from "./providers/github/github-context";
import { Actions } from "./providers/github/Actions";

const Router: React.FC = () => {
  const { pathname } = useLocation();

  const { dispatch } = useGithubAction();

  useEffect(() => {
    dispatch({ type: Actions.CLEAR_USERS });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};

export default Router;
