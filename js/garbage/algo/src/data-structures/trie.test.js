import { expect, test } from "vitest"
import { Trie } from "./trie"

test("Trie", () => {
  const trie = new Trie().insert("apple").insert("app").insert("ananas")

  expect(trie.search("foo")).toBe(false)
  expect(trie.search("apple")).toBe(true)
  expect(trie.search("app")).toBe(true)
  expect(trie.search("ananas")).toBe(true)

  expect(trie.suggest("a")).toEqual(["app", "apple", "ananas"])
  expect(trie.suggest("ap")).toEqual(["app", "apple"])
  expect(trie.suggest("app")).toEqual(["app", "apple"])
  expect(trie.suggest("appl")).toEqual(["apple"])
})
