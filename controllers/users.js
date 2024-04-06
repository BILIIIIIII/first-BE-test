import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUsers = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`user ${user.name} added to the database!`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const findUsers = users.find((user) => user.id === id);

  res.send(findUsers);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send(`user with id of ${id} has been deleted in the database`);
};

export const updatedUser = (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send("User not found");
  }
  if (name) user.name = name;
  if (age) user.age = age;

  res.send(`user with the id of ${id} has been updated`);
};
