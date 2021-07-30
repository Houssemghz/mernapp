const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

//1- get return al users
router.get("/users", (req, res) => {
  Users.find({}, (err, data) => {
    err ? res.send("not found") : res.send(data);
  });
  console.log("done");
});

// 2- post add a new user to the database

router.post("/users", (req, res) => {
  Users.create(req.body, (err) => {
    err ? res.send("failed to add") : res.send("add succefull");
  });
});

// 3- put edit a user by id

router.put("/users/:id", (req, res) => {
  Users.findByIdAndUpdate(req.params.id, req.body, (err) => {
    err ? res.send("update failed", err) : res.send("update is done");
  });
});

// app.put("/api/task/:id", (req, res) => {
//   Users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//     .then((data) => res.json(data))
//     .catch((err) => console.log("Update failed", err));
// });

// 4- delete remove a user by id

router.delete("/users/:id", (req, res) => {
  Users.findByIdAndRemove(req.params.id, (err) => {
    err ? console.log("failed delete ", err) : console.log("deleted is done");
  });
});

module.exports = router;
