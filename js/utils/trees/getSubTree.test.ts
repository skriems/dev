import { describe, test, expect } from "vitest";
import { getSubTree } from "./getSubTree";
import { WithChildren } from "./types";

describe(getSubTree.name, () => {

  const tree = {
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
  };

  describe("handles single root", () => {
    test("and returns subtree bar", () => {

      // @ts-expect-error parent_id is not null
      const subtree = getSubTree([tree], "bar");

      expect(subtree).toEqual([
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
      ]);
    });
    test("and returns subtree baz", () => {
      // @ts-expect-error parent_id is not null
      const subtree = getSubTree([tree], "baz");

      expect(subtree).toEqual([
        {
          id: "baz",
          parent_id: "bar",
          name: "baz",
          children: [],
        },
      ]);
    });
  });
});
