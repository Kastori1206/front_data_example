const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todoList = [
  {
    id: 1,
    text: "할일 1",
    done: false,
  },
];

//조회
app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

//추가
app.post("/api/todo", (req, res) => {
  const { id, text, done } = req.body;

  todoList.push({
    id,
    text,
    done,
  });

  return res.send("success");
});

//수정
app.put("/api/todo/:id", (req, res) => {
  const index = todoList.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.send("fail");
  }

  todoList[index]["text"] =
    req.body.text === undefined ? todoList[index]["text"] : req.body.text;
  todoList[index]["done"] =
    req.body.done === undefined ? todoList[index]["done"] : req.body.done;

  return res.send("success");
});

//삭제
app.delete("/api/todo/:id", (req, res) => {
  const index = todoList.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.send("fail");
  }
  todoList.splice(index, 1);
  return res.send("success");
});

app.listen(4000, () => {
  console.log("server start!!");
});
