import { generateId } from "~/utils/crypto";
import { Todo } from "./types";

export const db: Todo[] = [
  { id: generateId(), content: "lorem", completed: false },
  { id: generateId(), content: "ipsum", completed: false },
];
