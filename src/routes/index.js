const newRouter = require("../routes/news.router");
const siteRouter = require("../routes/site.router");
function route(app) {
  app.use("/news", newRouter);
  app.use("/", siteRouter);
}

module.exports = route;
