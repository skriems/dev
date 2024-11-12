import Elysia, { t } from "elysia";
import * as elements from "typed-html";
import { db } from "./db";
import { TodoList } from "./view/TodoList";
import { TodoItem } from "./view/TodoItem";
import { generateId } from "~/utils/crypto";
import { TodoPage } from "./view/TodoPage";
import { html } from "@elysiajs/html";

export const todoPlugin = new Elysia()
  .use(html())
  .get("/todos", ({ html }) => html(<TodoPage />))
  // make db available to all handlers
  .decorate("todos", db)
  .get("/api/todos", ({ todos }) => <TodoList todos={todos} />)
  .post(
    "/api/todos",
    ({ todos, body }) => {
      if (body.content.length === 0) {
        throw new Error("Content cannot be empty");
      }
      const newTodo = {
        id: generateId(),
        content: body.content,
        completed: false,
      };
      todos.push(newTodo);
      return <TodoItem {...newTodo} />;
    },
    {
      body: t.Object({ content: t.String() }),
    },
  )
  .put(
    "/api/todos/:id",
    ({ todos, params }) => {
      const todo = todos.find((todo) => todo.id === params.id);
      if (todo) {
        todo.completed = !todo.completed;
        return <TodoItem {...todo} />;
      }
    },
    { params: t.Object({ id: t.String() }) },
  )
  .delete(
    "/api/todos/:id",
    ({ todos, params }) => {
      const todo = todos.find((todo) => todo.id === params.id);
      if (todo) {
        todos.splice(todos.indexOf(todo), 1);
      }
    },
    { params: t.Object({ id: t.String() }) },
  );
