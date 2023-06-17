const express = require("express");
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

//--------GET All Todos--------------//
router.get("/", getTodos);

//--------CREATE a new Todo--------------//
router.post("/", createTodo);

//--------DELETE Todo--------------//
router.delete("/:id", deleteTodo);

//--------UPDATE Todo--------------//
router.patch("/:id", updateTodo);

module.exports = router;
