import * as elements from "typed-html";
import { html } from "@elysiajs/html";
import Elysia from "elysia";
import { ChatPage } from ".";

const render = (message: string) => `
<div id="chat" hx-swap-oob="beforeend">
  <div class="chat chat-start">
    <div class="chat-bubble">
      ${message}
    </div>
  </div>
</div>
`;

const sanitizeMessage = (message: string) => {
  console.log("message:", message);
  const sanitized = message
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1">$1</a>');

  console.log("sanitized:", sanitized);

  return render(sanitized);
};

export const chatPlugin = new Elysia({
  websocket: { perMessageDeflate: true, idleTimeout: 120 },
})
  .use(html())
  .get("/chat", ({ html }) => html(<ChatPage />))
  .ws("/api/ws", {
    open(ws) {
      console.log("someone connected to the chat:", ws.remoteAddress);
      ws.subscribe("room");
      ws.publish("room", "someone entered the room");
    },
    message(ws, message) {
      console.log("Incoming chat message:", message);
      ws.publish("room", sanitizeMessage(message.message));
    },
    close(ws) {
      ws.unsubscribe("room");
      console.log("someone left the chat:", ws.remoteAddress);
      ws.publish("room", "someone left the room");
    },
  });
