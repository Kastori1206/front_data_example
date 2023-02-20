import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};
function CustomForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo({
      text: todo,
      done: false,
      id: Date.now(),
    });
    setTodo("");
  };
  return (
    <form className={style.form} onSubmit={handleFormSubmit}>
      <input
        className={style.input}
        id="todo"
        type="text"
        value={todo}
        onInput={(e) => setTodo(e.target.value)}
        required
        autoFocus
        maxLength={60}
        placeholder="Add Todo"
      />
      <button className={style.button} type="submit" onClick={handleFormSubmit}>
        <PlusIcon width={24} height={24} />
      </button>
    </form>
  );
}

export default CustomForm;
