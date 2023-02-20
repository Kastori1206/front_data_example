import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};
function TodoItem({ todo, deleteTodo }) {
  const [isChecked, setIsChecked] = useState(todo.done);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <li className={todo.done ? style.liComplete : style.li}>
        <div className={style.row}>
          <input
            type="checkbox"
            checked={isChecked}
            name={todo.text}
            id={todo.id}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={todo.id} className={style.text}>
            {todo.text}
          </label>
        </div>
        <div className="flex flex-row gap-3">
          <button aria-label={`Update ${todo.text} Task`}>
            <PencilIcon width={24} height={24} />
          </button>
          <button
            aria-label={`Delete ${todo.text} Task`}
            onClick={() => deleteTodo(todo.id)}
          >
            <TrashIcon width={24} height={24} />
          </button>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
