const express = require("express");
const os = require("os");
const router = express.Router();
const db = require("../dbconnection");

/* GET home page. */
router.get("/api/getUsername", (req, res, next) => {
  res.send({ username: os.userInfo().username });
});

router.get("/api/geo/getCountryData", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  
  db.query("select * from `geo_location`", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error : ${err}`);
      res.send(err);
    }
  });
});

module.exports = router;
