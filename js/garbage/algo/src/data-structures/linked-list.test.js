import { expect, test } from "vitest"
import { LinkedList } from "./linked-list"

test("linked-list", () => {
  const list = new LinkedList()
    .prepend(1)
    .prepend(2)
    .append(3)
    .append(4)
    .delete(2)

  expect(list.toArray()).toEqual([1, 3, 4])
})
