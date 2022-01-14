import React from "react";

export default function Header({ user, handleLogOut }) {
  return (
    <div className="text-white">
      <header className={header}>
        <h1 className="text-xl">
          <span>tailwind </span>
          <span className={span}>todo</span>
        </h1>
        {user && (
          <div className={div}>
            <p className="text-zinc-500">
              Welcome, <span className="text-pink-500/75">{user.email}</span>
            </p>
            <button onClick={handleLogOut} className={button}>
              Log out
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

const header = `
  max-w-screen-lg 
  mx-auto 
  p-4 
  border-b 
  border-zinc-800 
  flex 
  items-center 
  justify-between
`;

const div = `
  flex 
  gap-4 
  items-center
`;

const span = `
  font-bold 
  text-green-700 
  tracking-wider
`;

const button = `
  text-xs 
  bg-zinc-600/20 
  rounded-full 
  mt-1 
  py-1 
  px-4 
  text-zinc-400 
  hover:bg-zinc-600/30 
  active:bg-zinc-600/50
`;
