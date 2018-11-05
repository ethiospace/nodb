const express = require("express");
const { json } = requir("body-parser");
const cors = require("cors");
const port = process.env || 3001;
const {
  getBrew,
  addBrew,
  updateBrew,
  deleteBrew
} = require("../controller/controller");
const app = express();
app.use(json());
app.use(cors());
app.get("api/breweries", getBrew);
app.post("api/breweries", addBrew);
app.put("api/breweries", updateBrew);
app.delete("api/breweries", deleteBrew);
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
