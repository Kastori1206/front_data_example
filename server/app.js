const express = require("express");
const app = express();

const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  },
];

app.get("/api/todo", (req, res) => {
  return todoList;
});

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  todoList.push({
    id: id++,
    text,
    done,
  });
});
app.listen(3000, () => {
  console.log("server start!!");
});
