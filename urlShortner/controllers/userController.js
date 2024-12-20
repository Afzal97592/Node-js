import User from "../models/user.models.js";
import { v4 as uuid } from "uuid";
import { setUser } from "../services/user.js";

const handleSignUpUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username && !email && !password) {
      return res.status(400).json({ message: "missing required fileds" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const createdUser = await User.create({ email, username, password });
    return res
      .status(201)
      .json({ message: "User created successfully", user: createdUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
};
const handleLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    const sessionId = uuid();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);

    return res.status(201).json({ message: "User  loggedin successfully!!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
};

export { handleSignUpUser, handleLoginUser };
