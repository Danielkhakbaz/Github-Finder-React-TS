import { BrowserRouter } from "react-router-dom";
import GithubProvider from "./providers/github/github-provider";
import Compose from "./components/compose/compose";
import Layout from "./components/layout/layout";
import Router from "./Router";

const App = () => {
  const Providers = [GithubProvider, BrowserRouter];

  return (
    <>
      <Compose components={Providers}>
        <Layout>
          <Router />
        </Layout>
      </Compose>
    </>
  );
};

export default App;
