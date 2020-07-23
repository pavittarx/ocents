const router = require("express").Router();
const User = require("./../models/index");

const bcrypt = require("bcrypt");


router.post("/signup", async(req, res)=>{
  res.send(
    req.body
  );
});

module.exports = router;