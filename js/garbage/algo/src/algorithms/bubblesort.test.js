import { test, expect } from "vitest"
import { bubbleSort } from "./bubblesort"

test("Bubble Sort", () => {
  expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3])
})
