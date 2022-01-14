import React from "react";

export default function TodoForm({ newTask, setNewTask, handleSubmit }) {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex gap-2 mb-">
      <input
        required
        className="flex-grow
      py-2 px-3 
      rounded 
      outline outline-0 
      focus:outline-2 focus:outline-offset-2 focus:outline-emerald-500
      transition-outline duration-100 ease-in focus:ease-out"
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="text-sm bg-emerald-700/75 px-3 rounded text-green-300 tracking-wider font-semibold hover:bg-green-700/50 hover:bg-white/2 active:bg-green-700/10 ">
        Add Task
      </button>
    </form>
  );
}
