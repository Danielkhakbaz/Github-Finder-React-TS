import axios from "axios";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const URL = `https://cors-anywhere.herokuapp.com/${GITHUB_URL}`;

export const GithubAxios = axios.create({
  baseURL: URL,
  headers: {
    Authentication: `token ${GITHUB_TOKEN}`,
  },
});
