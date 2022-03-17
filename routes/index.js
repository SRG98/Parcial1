const express = require("express");
const playerRouter = require("./players.routes");

function routerApi(app) {
  const router = express.Router();
  /* Parte del endpoint estático: http://localhost:3000/api/v1 */
  app.use("/api/v1", router);
  /* Endpoint: http://localhost:3000/api/v1/players */
  router.use("/players", playerRouter);
}

module.exports = routerApi;
