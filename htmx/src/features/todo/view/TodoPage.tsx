import * as elements from "typed-html";
import { Document } from "~/Document";
import { Header } from "~/components";

export const TodoPage = () => (
  <Document>
    <body class="flex flex-col justify-center items-center space-y-6">
      <Header />
      <h1 class="text-2xl">Todos</h1>
      <section hx-get="/api/todos" hx-trigger="load" hx-swap="innerHTML" />
    </body>
  </Document>
);
