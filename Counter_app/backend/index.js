const express = require("express");
const cors = require("cors");
const app = express();
const port = 3121;
const configureDB = require("./config/db");
const counterCtrl = require("./app/controller/counter-ctrl");
const { checkSchema } = require("express-validator");
const {
  counterValidationSchema,
  idvalidationSchema,
} = require("./app/validator/counter-validator");

app.use(express.json());
app.use(cors());
configureDB();

app.get("/api/counters", counterCtrl.lists);
app.post(
  "/api/counters",
  checkSchema(counterValidationSchema),
  counterCtrl.postlist
);
app.delete(
  "/api/counters/:id",
  checkSchema(idvalidationSchema),
  counterCtrl.deletelist
);
app.put("/api/counters/:id", counterCtrl.updatelist);

app.listen(port, () => {
  console.log("server running on", port);
});
