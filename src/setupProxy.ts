export const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app: any) => {
  app.use(
    createProxyMiddleware("/users/", {
      target: "https://api.github.com",
      changeOrigin: true,
      credentials: true,
    })
  );
  app.use(
    createProxyMiddleware("/search/users", {
      target: "https://api.github.com",
      changeOrigin: true,
      credentials: true,
    })
  );
};
