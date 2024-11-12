import { expect, test } from "vitest"
import { Stack, Queue } from "./stacks-queues"

test("Stack", () => {
  const stack = new Stack().push(1).push(2).push(3)
  expect(stack.toString()).toEqual("3 -> 2 -> 1")
  expect(stack.pop()).toEqual(3)
  expect(stack.pop()).toEqual(2)
  expect(stack.pop()).toEqual(1)
})

test("Queue", () => {
  const queue = new Queue().push(1).push(2).push(3)
  expect(queue.toString()).toEqual("1 -> 2 -> 3")
  expect(queue.pop()).toEqual(1)
  expect(queue.pop()).toEqual(2)
  expect(queue.pop()).toEqual(3)
})
