import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {
  addTodo,
  deleteCompleted,
  deleteTodo,
  fetchTodos,
  toggleCompleted,
} from "../services/todos";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    fetchData();
  }, []);

  const handleClick = async (task) => {
    await toggleCompleted(task.id, !task.is_complete);
    setTodos(
      todos.map((todo) =>
        todo.id === task.id ? { ...task, is_complete: !task.is_complete } : todo
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [res] = await addTodo(newTask);
    setTodos((prev) => [...prev, res]);
    setNewTask("");
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    const newTodos = todos.filter((todo) => id !== todo.id);
    setTodos(newTodos);
  };

  const handleDeleteCompleted = async () => {
    await deleteCompleted();
    const newTodos = todos.filter((todo) => !todo.is_complete);
    setTodos(newTodos);
  };

  return (
    <div className="p-12 max-w-screen-md mx-auto">
      <TodoForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        handleClick={handleClick}
        handleDelete={handleDelete}
        handleDeleteCompleted={handleDeleteCompleted}
      />
    </div>
  );
}
