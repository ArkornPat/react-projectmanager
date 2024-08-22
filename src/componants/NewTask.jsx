import { useRef } from "react";

export default function NewTask({ onAddTask }) {
  const inputRef = useRef();

  function handleClick() {
    const task = inputRef.current.value.trim();
    if (task === '') {
        return;
    }
    onAddTask(task);
    inputRef.current.value = '';
  }

  return (
    <div className="flex items-center gap-4">
      <input ref={inputRef} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  );
}

