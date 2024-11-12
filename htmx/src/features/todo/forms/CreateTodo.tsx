import * as elements from "typed-html";

export function CreateTodoForm() {
  return (
    <form hx-post="/api/todos" hx-swap="beforebegin" class="flex space-x-3">
      <input
        type="text"
        name="content"
        class="input input-bordered input-primary w-full max-w-xs"
        required="true"
      />
      <button type="submit">Create</button>
    </form>
  );
}
