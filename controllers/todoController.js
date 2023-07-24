const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

//--------GET All Todos--------------//
const getTodos = async (req, res) => {
  const { userId } = req.params;
  // const id = new mongoose.Types.ObjectId(userId);
  const todos = await Todo.find({ createdBy: userId }).sort({ createdAt: -1 });
  res.status(200).json(todos);
};

//--------CREATE a new Todo--------------//
const createTodo = async (req, res) => {
  const { userId } = req.params;
  const id = new mongoose.Types.ObjectId(userId);
  try {
    const todo = await Todo.create({
      ...req.body,
      createdBy: id,
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//--------DELETE Todo--------------//
const deleteTodo = async (req, res) => {
  const { userId, id } = req.params;

  if (
    !mongoose.Types.ObjectId.isValid(id) &&
    !mongoose.Types.ObjectId.isValid(userId)
  ) {
    return res.status(400).json({ error: "the id is not valid" });
  }

  const todo = await Todo.findOneAndDelete({ _id: id, createdBy: userId });

  if (!todo) {
    return res.status(400).json({ error: "No such todo" });
  }

  res.status(200).json(todo);
};

//--------UPDATE Todo--------------//
const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "the id is not valid" });
  }

  const todo = await Todo.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!todo) {
    return res.status(400).json({ error: "No such todo with this id" });
  }

  res.status(200).json(todo);
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
