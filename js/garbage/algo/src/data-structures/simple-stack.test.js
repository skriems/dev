import { expect, test } from "vitest"
import { SimpleStack } from "./simple-stack"

test("SimpleStack", () => {
  const stack = new SimpleStack(1, 2, 3, 4)
  expect(stack.size).toBe(4)
  expect(stack.toArray()).toEqual([1, 2, 3, 4])

  expect(stack.pop()).toBe(4)
  expect(stack.pop()).toBe(3)
  stack.push(5)
  expect(stack.toArray()).toEqual([1, 2, 5])
})
