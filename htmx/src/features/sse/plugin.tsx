import * as elements from "typed-html";
import Elysia from "elysia";
import { html } from "@elysiajs/html";
import { ServerSideEventsPage } from ".";
import Stream from "@elysiajs/stream";

export const ssePlugin = new Elysia()
  .use(html())
  .get("/sse", ({ html }) => html(<ServerSideEventsPage />))
  .get(
    "/api/events",
    () =>
      new Stream((stream) => {
        let count = 0;
        const interval = setInterval(() => {
          // we can send multiple events with a different type
          // stream.event = "new-joke";
          // stream.send("New Joke available");
          count++;
          stream.event = "news";
          stream.send(`event #${count}`);
        }, 1000);

        // Currently the stream gets closed every 5 seconds resulting
        // in the client reconnecting and retrieving all the events that
        // were sent in the meantime. We could also leave the stream open.
        setTimeout(() => {
          clearInterval(interval);
          stream.close();
        }, 3000);
      }),
  )
  .get(
    "/api/jokes",
    () =>
      new Stream(
        (stream) => {
          const interval = setInterval(() => {
            // here we globally set the event type
            stream.send("New Joke available");
          }, 10000);

          // The stream is not closed so we get realtime events
          // setTimeout(() => {
          //   clearInterval(interval);
          //   stream.close();
          // }, 3000);
        },
        // we can specify a global event type
        { event: "new-joke" },
      ),
  )
  .get("/api/joke", () => fetch("https://api.chucknorris.io/jokes/random"));
