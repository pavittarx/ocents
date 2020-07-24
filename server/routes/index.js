const router = require("express").Router();
const {Users} = require("./../models/index");

const bcrypt = require("bcrypt");


router.post("/signup", async (req, res) => {

  let usersParams = req.body;

  if(!usersParams.email || !usersParams.password)
  {
    res
      .status(401)
      .send("One or more fields required for signup are empty");
    
      return;
  }

  let existUser = await Users.findOne({email: usersParams.email});
  if(existUser)
  {
    res
      .status(401)
      .send("The user already exists, please try resetting your password.")
      .end();
    return;
  }

  let hashPwd = await bcrypt.hash(usersParams.password, 12);
  usersParams.password = hashPwd;
  let user = new Users(usersParams);

  user = await user.save();

  if(user)
  {
    res.status(200).send({
       id: user._id,
       email: user.email,
       name: user.name
    });
  }
  
});

module.exports = router;