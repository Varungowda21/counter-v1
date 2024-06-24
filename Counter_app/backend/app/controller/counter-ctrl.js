const Counter = require("../model/counter-model");
const { validationResult } = require("express-validator");
const counterCtrl = {};

counterCtrl.lists = (req, res) => {
  Counter.find()
    .then((counter) => {
      res.status(201).json(counter);
    })
    .catch((err) => {
      res.json(err);
    });
};
counterCtrl.postlist = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const body = req.body;
  const counter = new Counter(body);
  counter
    .save()
    .then((counter) => {
      res.status(201).json(counter);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

counterCtrl.deletelist = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const id = req.params.id;
  Counter.findByIdAndDelete(id)
    .then((counter) => {
      res.status(201).json(counter);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};
counterCtrl.updatelist = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const id = req.params.id;
  const body = req.body;
  Counter.findByIdAndUpdate(id, body, { new: true })
    .then((counter) => {
      res.status(201).json(counter);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

module.exports = counterCtrl;
