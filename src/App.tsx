import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compose from "./components/compose/compose";
import GithubProvider from "./providers/github/GithubProvider";
import AlertProvider from "./providers/alert/AlertProvider";
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/404";

const App = () => {
  const Providers = [GithubProvider, AlertProvider, BrowserRouter];

  return (
    <>
      <Compose components={Providers}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Compose>
    </>
  );
};

export default App;
