import { client, checkError } from "./client";

export async function fetchTodos() {
  const resp = await client.from("todos").select("*");
  return checkError(resp);
}

export async function toggleCompleted(id, is_complete) {
  const resp = await client.from("todos").update({ is_complete }).eq("id", id);
  return checkError(resp);
}

export async function addTodo(task) {
  console.log(task);
  const res = await client
    .from("todos")
    .insert([
      { task: task, is_complete: false, user_id: client.auth.user().id },
    ]);
  return checkError(res);
}

export async function deleteTodo(id) {
  console.log(id);
  const res = await client.from("todos").delete().eq("id", id);
  return checkError(res);
}

export async function deleteCompleted() {
  const res = await client.from("todos").delete().eq("is_complete", true);
  return checkError(res);
}
