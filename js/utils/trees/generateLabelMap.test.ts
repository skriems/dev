import { describe, expect, test } from "vitest"
import { generateLabelMap } from "./generateLabelMap"

describe(generateLabelMap.name, () => {
  const oneChildTree = {
    id: "foo",
    parent_id: null,
    name: "foo",
    children: [
      {
        id: "bar",
        parent_id: "foo",
        name: "bar",
        children: [
          {
            id: "baz",
            parent_id: "bar",
            name: "baz",
            children: [],
          },
        ],
      },
    ],
  }

  describe("generate full path labels", () => {
    test("and generates default labels", () => {
      const map = generateLabelMap([oneChildTree], "name", "children")

      expect(map["foo"]).toEqual("foo")
      expect(map["bar"]).toEqual("foo | bar")
      expect(map["baz"]).toEqual("foo | bar | baz")
    })

    test("and supports a custom seperator", () => {
      const options = {
        separator: " > ",
      }
      const map = generateLabelMap([oneChildTree], "name", "children", options)

      expect(map["foo"]).toEqual("foo")
      expect(map["bar"]).toEqual("foo > bar")
      expect(map["baz"]).toEqual("foo > bar > baz")
    })

    test("and supports a placeholder for the parent", () => {
      const options = {
        parentPlaceholder: ">",
      }
      const map = generateLabelMap([oneChildTree], "name", "children", options)

      expect(map["foo"]).toEqual("foo")
      expect(map["bar"]).toEqual("> | bar")
      expect(map["baz"]).toEqual("> | > | baz")
    })

    test("and supports placeholders and seperators", () => {
      const options = {
        separator: " ",
        parentPlaceholder: ">",
      }
      const map = generateLabelMap([oneChildTree], "name", "children", options)

      expect(map["foo"]).toEqual("foo")
      expect(map["bar"]).toEqual("> bar")
      expect(map["baz"]).toEqual("> > baz")
    })

    test("and supports a callback function to do whatever you want", () => {
      const map = generateLabelMap([oneChildTree], "name", "children", {
        callback: (label) => label.split(" | ").reverse().join(" | "),
      })

      expect(map["foo"]).toEqual("foo")
      expect(map["bar"]).toEqual("bar | foo")
      expect(map["baz"]).toEqual("baz | bar | foo")
    })

    test("and handles multiple children with a common ancestor", () => {
      // For this test its important that the multiple children have a common ancestor, here fara that
      // is _not_ the root element. With flara in place the label for alice was rendered as
      // `foo | fara | bar | alice` which is wrong.
      const twoChildrenTree = {
        id: "foo",
        parent_id: null,
        name: "foo",
        children: [
          {
            id: "fara",
            parent_id: "foo",
            name: "fara",
            children: [
              {
                id: "bar",
                parent_id: "foo",
                name: "bar",
                children: [
                  {
                    id: "baz",
                    parent_id: "bar",
                    name: "baz",
                    children: [],
                  },
                ],
              },
              {
                id: "alice",
                parent_id: "foo",
                name: "alice",
                children: [
                  {
                    id: "bob",
                    parent_id: "alice",
                    name: "bob",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      }

      const map = generateLabelMap([twoChildrenTree], "name", "children")

      expect(map["foo"]).toEqual("foo")
      expect(map["bar"]).toEqual("foo | fara | bar")
      expect(map["baz"]).toEqual("foo | fara | bar | baz")
      expect(map["alice"]).toEqual("foo | fara | alice")
      expect(map["bob"]).toEqual("foo | fara | alice | bob")
    })
  })

  describe("generates parent <-> child labels", () => {
    test("should generate default labels", () => {
      const options = {
        deep: false,
      }
      const map = generateLabelMap([oneChildTree], "name", "children", options)

      expect(map["foo"]).toEqual("foo")
      expect(map["bar"]).toEqual("foo | bar")
      expect(map["baz"]).toEqual("bar | baz")
    })

    test("should mask the parent", () => {
      const options = {
        deep: false,
        parentPlaceholder: ">",
      }
      const map = generateLabelMap([oneChildTree], "name", "children", options)

      expect(map["foo"]).toEqual("foo")
      expect(map["bar"]).toEqual("> | bar")
      expect(map["baz"]).toEqual("> | baz")
    })
  })
})
