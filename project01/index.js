const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { error } = require("console");

const app = express();

const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, res) => {
  return res.json({
    id: users[0].id,
    name: users[0].first_name,
  });
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
    if (body) {
      return res.json({
        data: body,
        status: 200,
        message: "Your data is saved successfully!",
      });
    } else {
      return res.json({ status: 400, message: "Your data is not save!" });
    }
  });
});

app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  const userIndex = users.findIndex((user) => user.id === id);
  users[userIndex] = { ...users[userIndex], ...body };
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
    if (userIndex === -1) {
      return res.json({ status: 400, message: "something went wrong!!" });
    } else {
      return res.json({
        data: users[userIndex],
        status: 200,
        message: "user update succefully!",
      });
    }
  });
});

app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  // const data = users.filter((user) => user.id !== id);

  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (error, data) => {
  // return res.json({
  //   status: 200,
  //   message: "This user deleted successfully",
  // });
  // });

  // or

  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.json({
      status: 404,
      message: "user not found",
    });
  }
  users.splice(userIndex, 1);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error) => {
    if (error) {
      return res.status(500).json({
        status: 500,
        message: "Error writing to file",
      });
    }

    res.json({
      status: 200,
      message: "User deleted successfully",
    });
  });
});

app.listen(PORT, () => {
  console.log("Server started!");
});
