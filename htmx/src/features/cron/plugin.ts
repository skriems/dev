import Elysia from "elysia";
import { cron } from "@elysiajs/cron";

export const cronPlugin = new Elysia().use(
  cron({
    name: "heartbeat",
    pattern: "0 */1 * * * *",
    run() {
      console.log("1min Heartbeat");
    },
  }),
);
