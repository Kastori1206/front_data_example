import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CustomForm from "./components/CustomForm";
import TodoList from "./components/TodoList";

const SERVER_URL = "http://localhost:4000/api/todo/";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  count: `text-center p-2`,
};
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = async (todo) => {
    await axios.post(SERVER_URL, todo);
    fetchData();
  };

  const deleteTodo = async (id) => {
    const res = await axios.delete(SERVER_URL + id);

    if (res.data === "success") {
      fetchData();
    } else {
      console.log("error");
    }
  };

  const fetchData = async () => {
    const res = await axios.get(SERVER_URL);
    setTodos(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const updateTodo = async (todo) => {
    const res = await axios.put(SERVER_URL + todo.id, todo);
    console.log(res);
    if (res.data === "success") {
      fetchData();
    } else {
      console.log("error");
    }
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <Header />
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}

        <CustomForm addTodo={addTodo} />
        {todos && (
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
