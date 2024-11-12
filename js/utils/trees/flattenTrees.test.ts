import { describe, test, expect } from "vitest";
import { flattenTrees } from "."

describe(flattenTrees.name, () => {
  describe("handles single roots", () => {
    test("with two children", () => {
      const given = [
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
      ]
      expect(flattenTrees(given)).toEqual([
        {
          id: "1",
          index: 0,
          order: 0,
          parent_id: "3",
          children: [
            {
              id: "4",
              index: 0,
              order: 0,
              parent_id: "1",
              children: [],
            },
            {
              id: "2",
              index: 1,
              order: 1,
              parent_id: "1",
              children: [],
            },
          ],
        },
        {
          id: "4",
          index: 0,
          order: 0,
          parent_id: "1",
          children: [],
        },
        {
          id: "2",
          index: 1,
          order: 1,
          parent_id: "1",
          children: [],
        },
      ])
    })
  })
})
