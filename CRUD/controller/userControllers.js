import { user } from "../modal/user.modals.js";

const createUser = async (req, res) => {
  const { firstName, lastName, email, age, role } = req.body;
  const userExists = await user.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists." });
  }
  if (email !== undefined) {
    const newUser = new user({ firstName, lastName, email, age, role });
    await newUser.save();
    return res
      .status(201)
      .json({ userData: newUser, message: "User cretaed successfully!" });
  }
  return res.status(400).json({ message: "Email is required!!." });
};

const updatedUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const isUserExist = await user.findById(id);
    if (!isUserExist) {
      return res.status(404).json({ message: "User not found!" });
    }
    const userUpdated = await user.findByIdAndUpdate(
      id,
      {
        ...isUserExist.toObject(),
        ...updatedUserData,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      message: "User updated successfully!",
      updatedUser: userUpdated,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await user.findById(id);
    if (!userData) {
      return res.status(404).json({ message: "User not found!" });
    }
    res
      .status(200)
      .json({ userData: userData, message: "user found successfully!!" });
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await user.findById(id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.findByIdAndDelete({ _id: id });
    return res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};
const getAllUser = async (req, res) => {
  try {
    const users = await user.find({});
    if (users.length > 0) {
      return res
        .status(200)
        .json({ users: users, message: "All users found successfully!" });
    } else {
      return res.status(404).json({ message: "No users found!" });
    }
  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export { createUser, updatedUser, getUserById, deleteUserById, getAllUser };
