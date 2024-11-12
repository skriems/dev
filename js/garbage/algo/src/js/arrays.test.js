import { test, expect } from "vitest"

test("arrays.slice", () => {
  expect([1, 2, 3, 4].slice(0, 3)).toEqual([1, 2, 3])
  expect([1, 2, 3, 4].slice(-2, 3)).toEqual([3])
  expect([1, 2, 3, 4].slice(-1, 4)).toEqual([4])
  expect([1, 2, 3, 4].slice(0, 1)).toEqual([1])
})

test("array.slice with number primitives", () => {
  const array = [1, 2, 3, 4]
  const sliced = array.slice(0, 2)
  sliced[0] = 5
  expect(array).toEqual([1, 2, 3, 4])
})

test("array.slice with string primitives", () => {
  const array = ["hello", "world", "foo", "bar"]
  const sliced = array.slice(0, 2)
  sliced[0] = "bye"
  expect(array).toEqual(["hello", "world", "foo", "bar"])
})

test("array.slice with objects", () => {
  const array = [{ a: 1 }, { a: 2 }, { a: 3 }]
  const sliced = array.slice(0, 2)
  sliced[0].a = 5
  expect(array).toEqual([{ a: 5 }, { a: 2 }, { a: 3 }])
})

test("array.splice", () => {
  const months = ["Jan", "March", "April", "June"]
  months.splice(1, 0, "Feb")
  expect(months).toEqual(["Jan", "Feb", "March", "April", "June"])

  months.splice(4, 1, "May")
  expect(months).toEqual(["Jan", "Feb", "March", "April", "May"])
})

test("array.reduce", () => {
  expect([1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0)).toEqual(10)
})
