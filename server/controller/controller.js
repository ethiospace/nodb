const axios = require("axios");
let breweries = [];
const getBrew = (req, res, next) => {
  axios.get("https://api.openbrewerydb.org/breweries").then(response => {
    // console.log(response.data);
    breweries = response.data;
    res.status(200).json(breweries);
  });
};

const addBrew = (req, res, next) => {
  // console.log(req.body);
  // console.log(breweries);
  let { name, brewery_type, address, state, city } = req.body;
  console.log(breweries);
  breweries.push({
    name,
    address,
    brewery_type,
    state,
    city
  });
  // console.log("after",breweries);
  res.status(200).json(breweries);
};

const updateBrew = (req, res, next) => {
  // console.log(breweries);
  // console.log(req.body);
  console.log(req.params.name);
  const brewerco = breweries.find(c => c.name === parseInt(req.params.name));
  const i = breweries.indexOf(brewerco);
  console.log(i);
  breweries[i].name = req.body.newName;
  res.status(200).json(breweries);
};

const deleteBrew = (req, res, next) => {
  const brewerco = breweries.find(c => c.id === parseInt(req.params.id));
  const i = breweries.indexOf(brewerco);
  breweries.splice(i, 1);
  res.json(breweries);
};
module.exports = {
  getBrew,
  addBrew,
  updateBrew,
  deleteBrew
};
