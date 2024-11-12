import * as elements from "typed-html";
import { html } from "@elysiajs/html";
import Elysia from "elysia";
import { ChatPage } from ".";
import * as env from "../../env";

export const llamaPlugin = new Elysia()
  .use(html())
  .get("/llama", ({ html }) => html(<ChatPage />))
  .get(
    "/api/ai",
    ({ query: { prompt } }) =>
      fetch(env.OLLAMA_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: env.OLLAMA_MODEL,
          prompt: prompt,
        }),
      }).then((response) => {
        // Retrieve its body as ReadableStream
        const reader = response.body.getReader();
        return new ReadableStream({
          start(controller) {
            const decoder = new TextDecoder("utf-8");
            const encoder = new TextEncoder();
            return pump();
            function pump() {
              return reader.read().then(({ done, value }) => {
                // console.log("done", done, "value", value);
                // When no more data needs to be consumed, close the stream
                if (done) {
                  controller.close();
                  return;
                }

                const parsed = JSON.parse(decoder.decode(value));
                console.log("value", JSON.parse(decoder.decode(value)));
                const ret = `event: llama\ndata: <span>${parsed.response}</span>\n\n`;
                const encoded = encoder.encode(ret);

                // Enqueue the next data chunk into our target stream
                controller.enqueue(ret);
                return pump();
              });
            }
          },
        });
      }),
    // Create a new response out of the stream
    // .then((stream) => new Response(stream)),
  );
