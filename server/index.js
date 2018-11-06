const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 3001;
const {
  getBrew,
  addBrew,
  updateBrew,
  deleteBrew
} = require("./controller/controller");
const app = express();
app.use(json());
app.use(cors());
app.get("api/breweries", getBrew);
app.post("api/breweries", addBrew);
app.put("api/breweries/:id", updateBrew);
app.delete("api/breweries/:id", deleteBrew);
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
