import * as elements from "typed-html";
import { Document } from "../../../Document";
import { Header } from "~/components";

const templateString = "<span>{{response}}</span>";

export const ChatPage = () => (
  <Document>
    <body class="flex flex-col justify-center items-center space-y-6">
      <Header />
      <h1 class="text-2xl">Chat</h1>
      <div hx-ext="sse" sse-connect="/api/ai?prompt=Hello">
        <div
          // hx-trigger="load"
          // hx-trigger="sse:llama"
          sse-swap="llama"
          hx-swap="beforeend"
        />
      </div>
    </body>
  </Document>
);
