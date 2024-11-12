import Elysia from "elysia";
import * as elements from "typed-html";

import { bearer } from "@elysiajs/bearer";
import { cookie } from "@elysiajs/cookie";
import { cors } from "@elysiajs/cors";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";

import * as env from "./env";
import { Home } from "~/features/home";
import { todoPlugin } from "~/features/todo";
import { chatPlugin } from "./features/chat/plugin";
import { ssePlugin } from "./features/sse/plugin";
import { cronPlugin } from "./features/cron";
import { jwtPlugin } from "./features/jwt";
import { llamaPlugin } from "./features/llama/plugin";

const app = new Elysia()
  .use(bearer())
  .use(cookie())
  .use(cors())
  .use(html())
  .use(staticPlugin())
  .use(swagger())
  .use(chatPlugin)
  .use(cronPlugin)
  .use(jwtPlugin)
  .use(llamaPlugin)
  .use(ssePlugin)
  .use(todoPlugin)
  .get("/", ({ html }) => html(<Home />))
  .listen(env.BETH_PORT, ({ hostname, port }) => {
    console.log(`Running at http://${hostname}:${port}`);
  });

export type App = typeof app;
