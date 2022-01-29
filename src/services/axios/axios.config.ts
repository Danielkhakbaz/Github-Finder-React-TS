import axios from "axios";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubAxios = axios.create({
  headers: {
    Authentication: `token ${GITHUB_TOKEN}`,
  },
});
