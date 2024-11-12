import Elysia from "elysia";
import { jwt } from "@elysiajs/jwt";
import * as env from "../../env";

export const jwtPlugin = new Elysia().use(
  jwt({
    name: "jwt",
    secret: env.BETH_JWT_SECRET,
  }),
);
