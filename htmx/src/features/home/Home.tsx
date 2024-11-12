import * as elements from "typed-html";
import { Document } from "~/Document";
import { Header } from "~/components";

export const Home = () => (
  <Document>
    <body class="flex flex-col justify-center items-center space-y-4">
      <Header />
      <h1 class="text-2xl">Welcome to HTMX</h1>
    </body>
  </Document>
);
