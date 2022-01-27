import { BrowserRouter, Routes, Route } from "react-router-dom";
import GithubProvider from "./providers/github/GithubProvider";
import Compose from "./components/compose/compose";
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import User from "./pages/user";
import About from "./pages/about";
import NotFound from "./pages/404";

const App = () => {
  const Providers = [GithubProvider, BrowserRouter];

  return (
    <>
      <Compose components={Providers}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:username" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Compose>
    </>
  );
};

export default App;
