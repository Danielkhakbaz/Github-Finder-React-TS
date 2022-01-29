const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/connect/token", {
      target: "https://api.github.com",
      changeOrigin: true,
    })
  );
};
