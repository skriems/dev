import * as elements from "typed-html";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types";
import { CreateTodoForm } from "../forms/CreateTodo";

export function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div class="flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
      <CreateTodoForm />
    </div>
  );
}
