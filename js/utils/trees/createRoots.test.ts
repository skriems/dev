import { describe, test, expect } from "vitest";
import { createRoots } from "."

describe(createRoots.name, () => {
  describe("handles single roots", () => {
    test("when the parent is null", () => {
      const given = [
        {
          id: "1",
          // root node
          parent_id: null,
        },
        {
          id: "2",
          parent_id: "1",
        },
      ]

      expect(createRoots(given, "parent_id")).toEqual([
        {
          id: "1",
          parent_id: null,
          children: [
            {
              id: "2",
              parent_id: "1",
              children: [],
            },
          ],
        },
      ])
    })
    test("when the parent is unknown", () => {
      const given = [
        {
          id: "1",
          // not a root node!
          parent_id: "3",
        },
        {
          id: "2",
          parent_id: "1",
        },
      ]

      expect(createRoots(given, "parent_id")).toEqual([
        {
          id: "1",
          parent_id: "3",
          children: [
            {
              id: "2",
              parent_id: "1",
              children: [],
            },
          ],
        },
      ])
    })
    test("when the parrent is missing and the root node is the last one", () => {
      const given = [
        {
          id: "1",
          parent_id: "3",
        },
        {
          id: "2",
          parent_id: "1",
        },
        {
          id: "3",
          // not a root node!
          parent_id: "4",
        },
      ]

      expect(createRoots(given, "parent_id")).toEqual([
        {
          id: "3",
          parent_id: "4",
          children: [
            {
              id: "1",
              parent_id: "3",
              children: [
                {
                  id: "2",
                  parent_id: "1",
                  children: [],
                },
              ],
            },
          ],
        },
      ])
    })
  })
  describe("handles multiple roots", () => {
    test("when the parent node is null", () => {
      const given = [
        {
          id: "1",
          parent_id: "3",
        },
        {
          id: "2",
          parent_id: "1",
        },
        {
          id: "4",
          parent_id: null,
        },
      ]

      expect(createRoots(given, "parent_id")).toEqual([
        {
          id: "1",
          parent_id: "3",
          children: [
            {
              id: "2",
              parent_id: "1",
              children: [],
            },
          ],
        },
        {
          id: "4",
          parent_id: null,
          children: [],
        },
      ])
    })

    test("when the parent node is unknown", () => {
      const given = [
        {
          id: "1",
          parent_id: "3",
        },
        {
          id: "2",
          parent_id: "1",
        },
        {
          id: "4",
          parent_id: "3",
        },
      ]

      expect(createRoots(given, "parent_id")).toEqual([
        {
          id: "1",
          parent_id: "3",
          children: [
            {
              id: "2",
              parent_id: "1",
              children: [],
            },
          ],
        },
        {
          id: "4",
          parent_id: "3",
          children: [],
        },
      ])
    })
  })

  describe("handles sorting", () => {
    test("and orders the children", () => {
      const given = [
        {
          id: "1",
          order: 0,
          parent_id: "3",
        },
        {
          id: "2",
          order: 0,
          parent_id: "1",
        },
        {
          id: "4",
          order: 0,
          parent_id: "1",
        },
      ]

      expect(createRoots(given, "parent_id")).toEqual([
        {
          id: "1",
          order: 0,
          parent_id: "3",
          children: [
            {
              id: "2",
              order: 0,
              parent_id: "1",
              children: [],
            },
            {
              id: "4",
              order: 0,
              parent_id: "1",
              children: [],
            },
          ],
        },
      ])
    })

    test("and orders the children based on the order key", () => {
      const given = [
        {
          id: "1",
          order: 0,
          parent_id: "3",
        },
        {
          id: "2",
          order: 1,
          parent_id: "1",
        },
        {
          id: "4",
          order: 0,
          parent_id: "1",
        },
      ]

      expect(createRoots(given, "parent_id")).toEqual([
        {
          id: "1",
          order: 0,
          parent_id: "3",
          children: [
            {
              id: "4",
              order: 0,
              parent_id: "1",
              children: [],
            },
            {
              id: "2",
              order: 1,
              parent_id: "1",
              children: [],
            },
          ],
        },
      ])
    })
  })
})
