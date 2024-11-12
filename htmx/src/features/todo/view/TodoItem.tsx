import * as elements from "typed-html";
import { Todo } from "../types";

export function TodoItem({ id, content, completed }: Todo) {
  return (
    <div class="flex space-x-3 todo">
      <label
        for="completed"
        hx-put={`/api/todos/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
      >
        <span class="sr-only">completed</span>
        <input
          type="checkbox"
          class="checkbox"
          name="completed"
          checked={completed}
        />
      </label>
      <p>{content}</p>
      <button
        hx-delete={`/api/todos/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
      >
        X
      </button>
    </div>
  );
}
