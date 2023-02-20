import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CustomForm from "./components/CustomForm";
import TodoList from "./components/TodoList";

const SERVER_URL = "http://localhost:4000/api/todo";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  dayname: `text-2xl text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((t) => t.id !== id));
  };

  // const fetchData = async () => {
  //   const res = await axios.get(SERVER_URL);
  //   setTodos(res.data);

  //   // fetch("http://localhost:4000/api/todo").then((res) => {
  //   //   res.json().then((data) => {
  //   //     setTodoList(data);
  //   //   });
  //   // });
  // };
  // useEffect(() => {
  //   fetchData();
  //   console.log(todos);
  // }, []);
  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   const text = e.target.text.value;
  //   // const done = e.target.done.value;

  //   await axios.post(SERVER_URL, { text });
  //   fetchData();

  //   // fetch("http://localhost:4000/api/todo", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify({ text, done }),
  //   // }).then(() => fetchData());
  // };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <Header />
        <CustomForm addTodo={addTodo} />
        {todos && <TodoList todos={todos} deleteTodo={deleteTodo} />}
      </div>
    </div>
  );
}

export default App;
