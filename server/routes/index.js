const router = require("express").Router();
const {Users} = require("./../models/index");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {

  let userParams = req.body;

  if(!userParams.email || !userParams.password)
  {
    res
      .status(401)
      .send("One or more fields required for signup are empty");
    
      return;
  }

  let existUser = await Users.findOne({email: userParams.email});
  if(existUser)
  {
    res
      .status(401)
      .send("The user already exists, please try resetting your password.")
      .end();
    return;
  }

  let hashPwd = await bcrypt.hash(userParams.password, 12);
  userParams.password = hashPwd;
  let user = new Users(userParams);

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


router.post("/login", async(req, res)=>{
  let userParams = req.body;

  if(!userParams.email || !userParams.password)
  {
    res.status(401).send("Please provide both email and password.");
    return;
  }

  let user = await Users.findOne({email:userParams.email})
  if(!user)
  {
    res.status(401).send("The given user does not exist.").end();
    return;
  }

  // checking the credentials for user
  if( !(await bcrypt.compare(userParams.password, user.password)))
  {
    res.status(401).send("Incorrect credentials!").end();
    return;
  }

  let token = await jwt.sign(
    {id: user._id, email: user.email, name: user.name},
    user.password
  );

  res.cookie("token", token).send("Login Success");
});

module.exports = router;