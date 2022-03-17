const express = require("express");
const routerApi = require(".");
const routes = express.Router();
const playerSchema = require("../models/player");

/* POST 
Endpoint: http://localhost:3000/api/v1/players/player */
routes.post("/player", (req, res) => {
  const player = playerSchema(req.body);
  player
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET 
Endpoint: http://localhost:3000/api/v1/players */
routes.get("/", (req, res) => {
  playerSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET 
Endpoint: http://localhost:3000/api/v1/players/parametro */
routes.get("/:playerId", (req, res) => {
  const { playerId } = req.params;
  playerSchema
    .findById(playerId)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* PUT
Endpoint: http://localhost:3000/api/v1/players/parametro */
routes.put("/:playerId", (req, res) => {
  const { playerId } = req.params;
  const {
    name,
    contry,
    date_personal,
    attributes,
  } = req.body;
  playerSchema
    .updateOne(
      { _id: playerId },
      { $set: { name, contry, date_personal, attributes } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* DELETE */
routes.delete("/:playerId", (req, res) => {
  const { playerId } = req.params;
  playerSchema
    .deleteOne({ _id: playerId })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = routes;
