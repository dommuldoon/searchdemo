const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const qs = require("query-string");
const request = require("request");
// require("dotenv").load();
const dotenv = require('dotenv')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/tweets", (req, res) => {
  const param = encodeURIComponent(req.query.q);
  let bearer = "";
  const credentials = `${process.env.CONSUMER_API}:${process.env.CONSUMER_SECRET}`;
  const credentialsBase64Encoded = new Buffer(credentials).toString("base64");

  request(
    {
      url: "https://api.twitter.com/oauth2/token",
      method: "POST",
      headers: {
        Authorization: `Basic ${credentialsBase64Encoded}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: "grant_type=client_credentials"
    },
    function (err, resp, body) {
      bearer = JSON.parse(body);
      bearer = bearer.access_token;

      axios({
        url: `https://api.twitter.com/1.1/search/tweets.json?q=${param}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${bearer}`,
          "Content-Type": "application/json"
        }
      })
        .then(items => {
          res.json({
            error: false,
            items: items.data.statuses
          });
        })
        .catch(() => {
          res.json({
            error: true,
            message: "Something went wrong"
          });
        });
    }
  );
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
