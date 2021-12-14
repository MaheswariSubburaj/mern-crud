import express from 'express';
import jwt from 'jsonwebtoken'
const router = express.Router();

// Users Model
import usersSchema from '../models/Users.js';

// CREATE users signup
router.route('/signup').post((req, res, next) => {
  usersSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

router.route('/signin').post(async (req, res, next) => {
  let { email, password } = req.body

  const user = await usersSchema.findOne(req.body);
  if (user) {
    const token = await jwt.sign({ email: user.email }, 'shhhhh');
    user.token = token
    console.log(user)
    user.save();

    res.json({ name: user.name, email: user.email, token: token })
  }
})

router.post("/forgotPassword", async (req, res) => {
  try {
      const schema = Joi.object({ email: Jwt.sign().email().required() });
      const { error } = schema.validate(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      const user = await email.findOne({ email: req.body.email });
      if (!user)
          return res.status(400).send("user with given email doesn't exist");

      // let token = await Token.findOne({ email: user.email });
      // if (!token) {
      //     token = await new Token({
      //         email: user.email,
      //         token: crypto.randomBytes(32).toString("hex"),
      //     }).save();
      // }

      const link = `${process.env.BASE_URL}/password-reset/${user.email}/${token.token}`;
      await sendEmail(user.email, "Password reset", link);

      res.send("password reset link sent to your email account");
  } catch (error) {
      res.send("An error occured");
      console.log(error);
  }
});

router.post("/:email/:token", async (req, res) => {
  try {
      const schema = Joi.object({ password: Joi.string().required() });
      const { error } = schema.validate(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      const user = await email.findById(req.params.email);
      if (!user) return res.status(400).send("invalid link or expired");

      // const token = await email.findOne({
      //     email: user.email,
      //     token: req.params.token,
      // });
      // if (!token) return res.status(400).send("Invalid link or expired");

      user.password = req.body.password;
      await user.save();
      // await token.delete();

      res.send("password reset sucessfully.");
  } catch (error) {
      res.send("An error occured");
      console.log(error);
  }
});

export default router;