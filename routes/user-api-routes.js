var db = require("../models");

module.exports = function (app) {
  app.get("/api/user", (req, res) => {
    db.User.findAll().then((dbUser) => res.json(dbUser));
  });

  app.get("/api/user/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });

  app.post("/api/user", (req, res) => {
    db.User.create(req.body).then((dbUser) => res.json(dbUser));
  });

  app.put("/api/user", (req, res) => {
    db.User.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });

  app.delete("/api/user/:id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });
};
