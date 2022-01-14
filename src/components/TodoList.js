import React from "react";

export default function TodoList({
  todos,
  handleClick,
  handleDelete,
  handleDeleteCompleted,
}) {
  return (
    todos.length > 0 && (
      <div className={wrap}>
        <ul className="rounded-2xl my-4 p-4 bg-zinc-800/50 text-zinc-300 ">
          {todos.map((todo) => {
            return (
              <li key={todo.id} className={li}>
                <label className={label}>
                  {todo.is_complete ? svg1 : svg2}
                  <input
                    type="checkbox"
                    checked={todo.is_complete}
                    className="hidden"
                    onChange={() => handleClick(todo)}
                  />
                  {todo.task}
                </label>
                <button
                  className={button}
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <button className={deleteAll} onClick={() => handleDeleteCompleted()}>
          Delete All Completed
        </button>
      </div>
    )
  );
}

const svg1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const svg2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-transparent group-hover:text-zinc-700 "
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const wrap = `
  flex flex-col
`;

const li = `
  hover:bg-zinc-500/10
  rounded-lg
  group
  flex
  pointer
`;

const label = `
  p-2
  flex 
  flex-grow
  items-center 
  gap-2 
  text-lg 
  text-zinc-400
  hover:text-white
`;

const button = `
  invisible
  group-hover:visible
  px-4
  text-zinc-500 
  hover:text-green-600
`;

const deleteAll = `
  px-4
  text-red-700 
  hover:text-red-600
  mx-auto
`;
