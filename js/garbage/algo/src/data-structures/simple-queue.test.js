import { expect, test } from "vitest"
import { SimpleQueue } from "./simple-queue"

test("SimpleQueue", () => {
  const queue = new SimpleQueue(1, 2, 3, 4)
  expect(queue.size).toBe(4)
  expect(queue.toArray()).toEqual([1, 2, 3, 4])

  expect(queue.pop()).toBe(1)
  expect(queue.pop()).toBe(2)
  expect(queue.pop()).toBe(3)
  expect(queue.push(1).toArray()).toEqual([4, 1])
  expect(queue.pop()).toBe(4)
})
