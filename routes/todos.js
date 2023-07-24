const express = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

//--------GET All Todos--------------//
router.get("/:userId", getTodos);

//--------CREATE a new Todo--------------//
router.post("/:userId", createTodo);

//--------DELETE Todo--------------//
router.delete("/:userId/:id", deleteTodo);

//--------UPDATE Todo--------------//
router.patch("/:id", updateTodo);

module.exports = router;
