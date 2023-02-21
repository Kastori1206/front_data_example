import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const style = {
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
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
