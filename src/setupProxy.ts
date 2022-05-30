export const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app: any) => {
  app.use(
    createProxyMiddleware("/users/", {
      target: "https://github-finder-react-ts.vercel.app",
      changeOrigin: true,
      credentials: true,
    })
  );
  app.use(
    createProxyMiddleware("/search/users", {
      target: "https://github-finder-react-ts.vercel.app",
      changeOrigin: true,
      credentials: true,
    })
  );
};
