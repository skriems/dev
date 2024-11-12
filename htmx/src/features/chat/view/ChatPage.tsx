import * as elements from "typed-html";
import { Document } from "../../../Document";
import { Header } from "~/components";
import { addOwnMessage } from "../utils/addOwnMessage";

export const ChatPage = () => (
  <Document>
    <body class="flex flex-col justify-center items-center space-y-6">
      <Header />
      <h1 class="text-2xl">The Room</h1>
      <div
        class="card w-96 bg-base-200 shadow-xl p-4"
        hx-ext="ws"
        ws-connect="/api/ws"
      >
        <div id="chat" class="flex flex-col card-body" />
        <form id="form" class="card-actions justify-end" ws-send>
          <input class="input input-bordered" name="message" />
        </form>
      </div>
    </body>
    {addOwnMessage}
  </Document>
);
